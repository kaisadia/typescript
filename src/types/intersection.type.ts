type Dog1 = {
    name: string;
    wags: boolean; 
    barks: boolean
}

type Cat1 = {
    name: string;
    purrs: boolean
}

type IntersectionAnimal = Dog1 & Cat1

let hybrid: IntersectionAnimal = {
    name: 'buddy',
    barks: true,
    wags: false,
    purrs: true
}