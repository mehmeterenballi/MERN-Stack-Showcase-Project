export interface Flight {
    lastUpdatedAt: string;
    actualLandingTime: string;
    aircraftType: {
        iataMain: string;
        iataSub: string;
    },
    baggageClaim: {
        belts: string[];
    };
    codeshares: {
        codeshares: string[];
    };
    estimatedLandingTime: string;
    expectedTimeOnBelt: string;
    flightDirection: string;
    flightName: string; // Uçuş adı
    flightNumber: number; // Uçuş numarası
    id: string;
    isOperationalFlight: boolean;
    mainFlight: string;
    prefixIATA: string;
    prefixICAO: string;
    airlineCode: number;
    publicFlightState: {
        flightStates: string[];
    };
    route: {
        destinations: string[];
        eu: string;
        visa: boolean;
    };
    scheduleDateTime: string;
    scheduleDate: string;
    scheduleTime: string;
    serviceType: string;
    terminal: number;
    schemaVersion: string;
}