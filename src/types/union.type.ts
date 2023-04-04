type Dog = {
    name: string;
    barks: boolean;
    wags: boolean
}

type Cat = {
    name: string;
    purrs: boolean
}

type DogandCatUnion = Dog | Cat

let dog: DogandCatUnion ={
    name: 'Buddy',
    barks: true,
    wags: true
}

let cat: DogandCatUnion = {
    name: 'Bella',
    purrs: true
}

let dogCat: DogandCatUnion = {
    name: 'hybrid',
    barks: true,
    wags: false,
    purrs: false
}

//////////////////////////////////////////////////////////////////////////

type StringorNumber = number | string

function numberOrString (a: StringorNumber, b: StringorNumber ) {
   if (typeof a == 'number' && typeof b == 'number'){
    return a + b
   } else {
    return a.toString()+b.toString()
   }
}

console.log(numberOrString('Mark', 6))