
// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'


import connectDB from "./db/index.js"

//method -2 

dotenv.config({
  path:'./env'
})

connectDB();































/* method -1 
import mongoose from "mongoose";

import {DB_NAME} from "./constants"

import express from "express"

const app=express()

(async()=>{
 try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

  app.on("error",(error)=>{
    console.log("Error",error);
    throw error
  })

 app.listen(process.env.PORT,()=>{
  console.log(`App is listing on port ${process.env.PORT}`)
 })

 } catch (error) {
  console.log("Erroe",error);
  throw error
 }

})()

*/