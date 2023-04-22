require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const app = express()
const port = 8080;
const main = require('./routes/main')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    try {
        res.json('hello from server site')
    } catch (error) {
        
    }
})
app.use('/main',main)
console.log(process.env.MONGO)

app.listen(port,()=>{
    console.log(`port running at ${port}`)
})