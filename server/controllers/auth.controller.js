const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')
const keys = require('../keys')

module.exports.login = async (req, res) => {
  try {
    const candidate = await User.findOne({ username: req.body.username })

    if (candidate) {
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

      if (isPasswordCorrect) {
        const token = jwt.sign({
          login: candidate.login,
          userId: candidate._id
        }, keys.JWT, { expiresIn: 60 * 60 }) // 1 hour

        res.json({ token })
      } else {
        res.status(401).json({ message: 'Пароль невірний' })
      }
    } else {
      res.status(404).json({ message: 'Користувача не знайдено' })
    }
  } catch (err) {
    res.status(500)
    console.log(err)
  }
}


module.exports.create = async (req, res) => {
  try {
    const emailAudit = await User.findOne({ email: req.body.email })
    const usernameAudit = await User.findOne({ username: req.body.username })
    const isGoodPassword = req.body.password.length > 5

    if (emailAudit) {
      res.status(409).json({ message: 'Email зайнятий' })
    } else if (usernameAudit) {
      res.status(409).json({ message: 'Ім\'я зайняте' })
    } else if (!isGoodPassword) {
      res.status(409).json({ message: 'Пароль заслабкий' })
    } else {
      const salt = bcrypt.genSaltSync(10)
      
      const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt)
      })

      await user.save()
      res.status(201).json(user)
    }
  } catch (err) {
    res.status(500)
    console.log(err)
  }
}