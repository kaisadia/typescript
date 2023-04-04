// create a file roles.ts and export Roles
// import { Roles } from "./roles"


enum Roles {
    author = 'author',
    admin = 'admin',
    editor = 'editor'
    }
    
    type Person = {
        name: string;
        email: string;
        password: string;
        role: Roles
    }
    
    const person3: Person = {
        name: 'John Doe',
        email: 'john@doe.com',
        password: 'abc123',
        role: Roles.admin
    }
    
    console.log(person3)