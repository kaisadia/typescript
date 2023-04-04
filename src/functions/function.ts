type greetingFunction = (greeting: string) => string  //parameter: string, returns: string

type Person4 = {
    name: string;
    age: number;
    country: string;
    greet: greetingFunction
}

const person5: Person4 = {
    name: 'Jane',
    age: 54,
    country: 'Australia',
    greet: (greeting) => {return `${greeting} ${person5.name}`}
}

console.log(person5.greet('Hello'))