const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    lastname:{
        type:String
    },
    message:{
        type:String
    }
},{timestamps:true})

const ContactUs = mongoose.model("ContactUs",contactSchema)
module.exports = ContactUs