import express from 'express'
import exampleRouter from './routes/example'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('Someon pinged here!!')
  res.send('pong')
})

app.use('/api/examples', exampleRouter)

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
