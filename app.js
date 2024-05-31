require('dotenv').config()

//async errors

const express = require('express')
const app = express();


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())


// routes

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

//products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

const start = async()=>{
    try {
        //connect db
        app.listen(port,console.log(`server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()

