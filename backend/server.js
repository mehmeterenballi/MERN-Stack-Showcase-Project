require('dotenv').config()

const cors = require('cors');
const express = require('express')
const mongoose = require("mongoose")
const myFlightRoutes = require("./routes/myFlights")
const allFlightRoutes = require("./routes/allFlights")

// express app
const app = express()
app.use(cors());

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/myFlights", myFlightRoutes)
app.use("/", allFlightRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listenin on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


