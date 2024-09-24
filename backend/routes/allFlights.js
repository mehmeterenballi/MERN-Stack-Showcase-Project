require('dotenv').config()
const express = require('express')
const { fetchAllFlights } = require('../apis/fetchFlights');

const router = express.Router()

// GET all flights
router.get('/', async (req, res) => {
    try {
        const flights = await fetchAllFlights(process.env.app_id, process.env.app_key)
        if (!flights) {
            return res.status(404).json({ error: 'No flights found...' })
        }
        res.status(200).json(flights)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// GET a single flight
// router.get('/:id', getFlight)

module.exports = router