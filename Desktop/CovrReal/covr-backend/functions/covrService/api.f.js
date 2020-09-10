import * as functions from 'firebase-functions'
import { getBars } from './firebaseService'
import express from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
app.get('/bars', async (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json')
    const bars = await getBars()
    response.send(bars)
  } catch (e) {
    console.error(e)
    response.status(500)
    response.send({ error: 'Error fetching updates from firestore' })
  }
})
let api = functions.https.onRequest(app)
export default api
