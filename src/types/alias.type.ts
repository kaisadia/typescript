type Article = {
    author: string;
    content?: string;
    title?: string;
    image?: string
}

let article: Article = {
    author: 'Kaisa',
    content: 'novel',
    title: 'Story of my life'

}

console.log(article)

////////////////////////////////////////////////////////////////////////////////

type Caterer ={
    name: string
    address: string
    phone: number
}


type Airplane = {
model: string;
flightNumber: string;
tof: Date;
toa: Date;
caterer: Caterer
}

const airplane: Airplane = {
model: 'Airbus A380',
flightNumber: 'A2201',
tof: new Date(),
toa: new Date(),
caterer: {
    name: 'Special food inc',
    address: ' 568 some street',
    phone: 7934096
}
}
