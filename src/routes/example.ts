import express from 'express'
import * as exampleServices from '../services/exampleServices'

const router = express.Router()

router.get('/', (_req, res) => {
  console.log('Se hizo un get')
  res.send(exampleServices.getData())
})
router.get('/:id', (req, res) => {
  console.log('Se hizo un get')
  const example = exampleServices.findById(+req.params.id)
  res.send(example)
})
router.post('/', (_req, res) => {
  res.send('Example post resp')
})

export default router
