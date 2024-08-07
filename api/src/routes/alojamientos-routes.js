module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/alojamientos-controller.js')

  router.post('/', controller.create)

  app.use('/api/front/alojamientos', router)
}
