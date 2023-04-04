let number1: readonly number[] = [1, 2, 2, 5];

type ReadOnlyPerson = readonly [string, string, number]

const person2: ReadOnlyPerson = ['John', 'Smith', 35]