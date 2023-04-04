// firstname. lastname, age, address?

let person1: [string, string, number, string?] = ['Kaisa', 'Diakhate', 35]

// [NumberOfStudents: Number, passing, boolean, 'John', 'Stella']

type LisOfStudents = [number, boolean, ...string[]]

let passingStudents: LisOfStudents = [3, true, 'John', 'Stella', 'Mark']
let failingStudents: LisOfStudents = [2, false, 'Sara', 'Steve']