type Airplane1 = {
    model: string;
    flightNumber: string;
    tof: Date;
    toa: Date;
    caterer: Caterer
    seats: {
        [key: string|number]: string|number
    }
}

let airplane1 = {
    model: 'Airbus',
    flightNumber: 'AY78',
    tof: new Date(),
    toa:  new Date(),
    caterer: 'catering company',
    seats: {
       9: 'Mark Johnson',
       11: 'John Markson'
    }
}
