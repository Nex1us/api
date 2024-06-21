const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username: {type:String, required:[true, "Choisissez un pseudo"]},
    email: {type:String, required:[true, "Choisissez un email"]},
    country: {type:String, required:[true, "Selectionnez un pays d'origine"]},
    favorite_techno: {type:String, required:[true, "dites votre langages informatique preférés"]},
    job_title: {type:String,required:[true, "Dites le poste que vous occupez"]},
    annual_salary : {type:Number, required:[true,"Donnez votre salaire annuel "]}
})

const userdata =  mongoose.model("User", userSchema)
module.exports = userdata;