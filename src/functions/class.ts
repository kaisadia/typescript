// Kumpi vaan kahdesta tyylistä käy. Jälkimmäisessä pitää laittaa public, private...constructoriin

class People {
    firstname: string;
    age: number; 

    constructor(f: string, a: number) {
        this.firstname = f;
        this.age = a 
    }
}

const pers = new People('Kaisa', 35)

console.log(pers)


/*
class People {
    constructor(public firstname: string, public age: number) {}
}

const pers = new People('Kaisa', 35)

console.log(pers)
*/