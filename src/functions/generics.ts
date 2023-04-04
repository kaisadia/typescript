/*
function identity (param: string) :string {
    return param
}
*/

function identity <Type>(param: Type) :Type {
    return param
}



let item = identity('Kaisa')
let item2 = identity(7)