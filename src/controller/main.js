// const uploadFile  = require("../s3")
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const { error } = require('console')
const Main = require('../model/main')
const name = process.env.NAME
const region = process.env.REGION
const accessKeyId = process.env.ACCESSKEY
const secretAccessKey = process.env.SECKEY
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const s3fun = (file) => {
    const log = fs.createReadStream(file.path)
    return s3.upload({
        Bucket: name,
        Body: log,
        Key: file.filename
    }).promise()

}

exports.Upload = (async (req, res) => {
    // console.log("one",req.file)
    try {
        const {name,description,currency,price} = req.body
        const files = req.files
        let arr =[]
        for(let file of files){
            const data = await s3fun(file)
            arr.push(data.Location)

        }
        const data = new Main({
            name,
            description,
            currency,
            price,
            images:arr

        })
        const savedata = await data.save()
        res.json(savedata)
    } catch {
        res.json(error)
    }


})


exports.getData=(async(req,res)=>{
    try {
        const data = await Main.find()
        res.json(data)
    } catch (error) {
        
    }
})
exports.deleteItem=(async(req,res)=>{
    try {
        console.log(req.body)
        const del = await Main.findByIdAndDelete(req.params.id)
        res.json(del)
    } catch (error) {
        
    }
})