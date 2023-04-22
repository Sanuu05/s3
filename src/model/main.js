const mongoose= require('mongoose')

const mainSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    description:{
        type:String
    },
    currency:{
        type:String
    },
    price:{
        type:Number
    },
    images:{
        type:Array
    }
})

const Main = mongoose.model('Mains',mainSchema)
module.exports=Main