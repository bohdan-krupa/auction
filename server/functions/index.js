const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin')

const app = express()
app.use(cors({ origin: true }))

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '2GB'
}

const serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://aucfine.firebaseio.com'
})

app.get('/make-bid', async (req, res) => {
  try {
    const tokenId = req.get('Authorization').split('Bearer ')[1]
    const auctionId = req.query.id

    const decodedToken = await admin.auth().verifyIdToken(tokenId)

    await admin.database().ref(`/auctions/${auctionId}`).update({
      currentSecond: 10,
      buyer: decodedToken.email
    })

    res.send(true)
  } catch (err) {
    res.status(500).send(err)
  }
})

// let start = 0

setInterval(async () => {
  // admin.database().ref(`/test`).set(++start)

  const auctions = (await admin.database().ref(`/auctions`).once('value')).val()

  for (auction in auctions) {
    if (auctions[auction].startTime > 0) {
      admin.database().ref(`/auctions/${auction}/startTime`).set(auctions[auction].startTime - 1)
    } else {
      let currentSecond = auctions[auction].currentSecond - 1
      currentSecond = currentSecond > 0 ? currentSecond : 0

      admin.database().ref(`/auctions/${auction}`).update({
        startTime: 0,
        currentSecond
      })
    }
  }
}, 1000)


// Get all auctions
app.get('/auctions', (req, res) => {
  try {
    admin.database().ref('/auctions').once('value', snap => {
      res.send(snap.val())
    })
  } catch (err) {
    res.status(500).send(err)
  }
})

// Get auction by id
app.get('/auction', (req, res) => {
  try {
    const id = req.query.id
    admin.database().ref(`/auctions/-${id}`).once('value', snap => {
      const auction = snap.val()
      if (auction) {
        res.send(snap.val())
      } else {
        res.status(404).send('Аукціон не знайдено')
      }
    })
  } catch (err) {
    res.status(500).send(err)
  }
})

// Add auction
app.post('/admin/auction', async (req, res) => {
  try {
    const { title, desc, currentPrice, price, startTime, images } = req.body

    await admin.database().ref('/auctions').push({
      title,
      desc,
      currentPrice,
      price,
      startTime,
      images
    })

    res.send(true)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete auction
app.delete('/admin/auction', async (req, res) => {
  try {
    await admin.database().ref(`/auctions/-${req.query.id}`).remove()

    res.send(true)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update auction
app.put('/admin/auction', async (req, res) => {
  try {
    const { title, desc, startPrice, startTime, images } = req.body

    await admin.database().ref(`/auctions/-${req.query.id}`).update({
      title,
      desc,
      startPrice,
      startTime,
      images
    })

    res.send(true)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Check is admin
app.get('/admin/isAdmin', async (req, res) => {
  try {
    const tokenId = req.get('Authorization').split('Bearer ')[1]
    const decodedToken = await admin.auth().verifyIdToken(tokenId)

    if (decodedToken.email == "bodya.save.dev@gmail.com") {
      res.send(true)
    } else {
      res.send(false)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

exports.api = functions.runWith(runtimeOpts).https.onRequest(app)