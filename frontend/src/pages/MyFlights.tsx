import { useEffect, useState } from "react"

const MyFlights = () => {
    const [myFlights, setMyFlights] = useState(null)

    useEffect(() => {
        const fetchFlights = async () => {
            const response = await fetch('http://localhost:4000/api/myFlights')
            const json = await response.json()

            if (response.ok) {
                setMyFlights(json)
            }
        }
        fetchFlights()
    }, [])

    return (
        <div className="home">
            <div className="">

            </div>
        </div>
    )
}

export default MyFlights