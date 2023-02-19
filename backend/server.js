import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
// import morgan from 'morgan'
// import path from 'path'
import connectDB from './config/db.js'
import { notFound, errorHanlder } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
//in import we have to use .js after name since now we are at backend and using ES module
//and node


dotenv.config()

connectDB()


const app = express()

app.get('/', (req, res) => {
  res.send("<h1>App is running</h1>")
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHanlder)

app.use((req, res, next) => { //no specified rout meaning all server requests will pass through this code! if the code above was not resolved
  const error = new Error(`Not Found ${req.originalUrl}`) //req.originalUrl=> is the url the user entered
  res.status(404)
  next(error)
})
//error handling middleware:
app.use((err, req, res, next) => { //this code will be fired off only when error object exists in the app.
  //err- catches errors thrown from anyware in our server or errors from the
  DB
  console.log('error middleware on')
  //sometimes even errors could have a statuscode of 200 so we need to change them to the 500 server error relm
  //if it's not 200 it will have it's original status code.
  const ststusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(ststusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, //the stack of the error object is it's explanation (we will show it only in dev)
  })
  next()

})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))
