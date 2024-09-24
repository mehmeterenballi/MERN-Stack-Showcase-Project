
const express = require('express')
const {
    createFlight,
    getFlights,
    getFlight,
    deleteFlight
} = require('../controllers/flightController')

const router = express.Router()

// GET all flights
router.get('/', getFlights)

// GET a single flight
router.get('/:id', getFlight);

// POST a new flight
router.post('/', createFlight)

// DELETE a flight
router.delete('/:id', deleteFlight);

module.exports = router