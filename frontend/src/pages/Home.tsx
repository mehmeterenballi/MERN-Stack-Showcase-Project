import React from 'react';
import { AnimatedModal } from '../components/animetedModal';
import { Banner } from '@/components/Banner';

const Home: React.FC = () => {



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
