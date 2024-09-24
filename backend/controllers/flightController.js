const Flights = require('../models/FlightModel')
const mongoose = require('mongoose')

// get all flights
const getFlights = async (req, res) => {
    const flights = await Flights.find({}).sort({ createdAt: -1 })
    res.status(200).json(flights)
}

// get a single workout
const getFlight = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    try {
        const flight = await Flights.findById(id)
        if (!flight) {
            return res.status(404).json({ error: 'No such flight' })
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// create new flight
const createFlight = async (req, res) => {
    const { airlinesCompany, aircraftType, flightDirection, destination, flightNumber, scheduleDate, scheduleTime } = req.body

    // add doc to db
    try {
        const flight = await Flights.create(req.body)
        res.status(200).json(flight)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a flight
const deleteFlight = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such flight' })
    }

    try {
        const flight = await Flights.findByIdAndDelete({ _id: id });
        if (!flight) {
            return res.status(404).json({ error: 'Flight not found' });
        }
        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// update a flight


module.exports = {
    createFlight,
    getFlights,
    getFlight,
    deleteFlight
}