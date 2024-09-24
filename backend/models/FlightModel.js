const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airlinesCompany: {
        type: String,
        required: true
    },
    aircraftType: {
        type: String,
        required: true
    },
    flightDirection: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flightNumber: {
        type: Number,
        required: true
    },
    scheduleDate: {
        type: String,
        required: true
    },
    scheduleTime: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Flight', flightSchema)