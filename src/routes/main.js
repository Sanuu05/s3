
const express = require('express')
const route = express.Router()
const multer = require('../multer')
const { Upload, getData,deleteItem } = require('../controller/main')


route.use('/post',multer.array('image'),Upload)
route.get('/get',getData)
route.delete('/del/:id',deleteItem)

module.exports= route