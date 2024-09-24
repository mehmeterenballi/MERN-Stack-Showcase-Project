import React, { useEffect, useState } from 'react';
import { Flight } from '../interfaces/FlightInterface';
import { AnimatedModal } from '../components/animetedModal';

const Home: React.FC = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch("http://localhost:4000/");
                const data = await response.json();
                setFlights(data.flights); // Burada API'den gelen uçuş verilerini alıyoruz
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchFlights(); // fetchFlights'ı çağırıyoruz
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Airline Companies</h1>
            <AnimatedModal></AnimatedModal>
            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                        {flight.flightName} - {flight.flightNumber} ({flight.aircraftType.iataMain})
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;
