const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin')

const app = express()
app.use(cors({ origin: true }))

const runtimeOpts = {
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

    let currentTime = new Date()
    currentTime = new Date(currentTime.setSeconds(currentTime.getSeconds() + 10)).toJSON()

    const currentPrice = await (await admin.database().ref(`/auctions/${auctionId}/currentPrice`).once('value')).val()
    await admin.database().ref(`/auctions/${auctionId}`).update({
      currentTime,
      currentPrice: currentPrice + 100,
      buyer: decodedToken.email.split('@')[0]
    })

    res.send(true)
  } catch (err) {
    res.status(500).send(err)
  }
})

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
    await admin.database().ref('/auctions').push(req.body)

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