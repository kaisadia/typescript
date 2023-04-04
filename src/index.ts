
class Human {
    private testUserAge(age: number) {
        if (age < 1 || age > 150) {
    throw new Error ('Age is not valid')
    }
    return age }

    constructor(
        private _name: string,
        private _age: number
    ) {
        this.testUserAge(_age)
    }


 public get age() {
    return this._age
 }

 public get name() {
    return this._name
 }

 public set age(age: number) {
    this.testUserAge(age)
    this._age=age
    
 }
}

const human: Human = new Human('Kaisa', 35)
console.log(human)



