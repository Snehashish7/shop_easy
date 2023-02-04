import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors' //just to colour the console(installed using npm i colors)
import connectDB from './config/db.js'
//in import we have to use .js after name since now we are at backend and using ES module
//and node

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()


const app = express()

app.get('/', (req, res) => {
    res.send("<h1>App is running</h1>")
})

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))