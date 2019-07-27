'use strict';
//object literal Anotation  
/*
var persona=
{
    nombre: 'Pedro',
    edad: 50
}

persona.sexo = 'Masculino';

persona.fulName = function()
{
    return persona.nombre + 'edad: ' +  persona.edad;
}

alert(persona.fulName());


// Consutructor function

var persona2= function ()
{
    this.nombre = name;
    this.edad = age;
} 

var persona2function= new persona2('Juan',50);

alert(persona2function.nombre);


// Prototype Object create

var persona3 = Object.create(Object.prototype,{
    nombre: {
        value: 'Pedro',
        enumerable: true,
        writable: true,
        configurable: true
    },
    edad: {
        value: 25,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

alert(persona3.nombre);
*/
export class persona
{
    constructor(name, age)
    {
        this.nombre = name;
        this.edad = age;
    }

    fullDatos()
    {
        return this.nombre + ' edad= '+ this.edad;
    }

}

let jaun = new persona('Pedro',25);
//alert(juan.fullDatos());