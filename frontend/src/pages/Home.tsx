import React, { useEffect, useState } from 'react';
import { Flight } from '../interfaces/FlightInterface';
import { AnimatedModal } from '../components/animetedModal';
import { Banner } from '@/components/Banner';

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

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <main className='relative w-full z-40'>
            <Banner />
            <div className='bg-transparent w-9/12 px-14 mx-auto'>
                <h1 className='text-lg'>Bütün Uçuşlar</h1>
                <AnimatedModal />
            </div>
            {/* <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                    {flight.flightName} - {flight.flightNumber} ({flight.aircraftType.iataMain})
                    </li>
                    ))}
                    </ul> */}
        </main>
    );
};

export default Home;
