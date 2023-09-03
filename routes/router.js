var express = require("express")
//var app = express()
let router = express.Router()
let controller = require('../controllers/controller')

router.post('/api/dog', (req, res, next) => {
    controller.postDog(req, res);
})

router.get('/api/dog', (req, res, next) => {
    controller.getAllDogs(req, res)
})

router.get('/', (req, res, next) => {
    controller.getAllDogs(req, res)
})


module.exports = router;