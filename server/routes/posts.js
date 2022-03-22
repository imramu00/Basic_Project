const router = require('express').Router()
const Redis = require('redis')
const axios = require('axios')

const redisClient = Redis.createClient()

router.get('/', async (req, res) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/photos/1'
  )
  redisClient.setEx('photos', 3600, JSON.stringify(data))
  res.json(data)
})

module.exports = router
