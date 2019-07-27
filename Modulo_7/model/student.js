'use strict'
import { Persona } from 'model/Persona.js'
class Estudiante extends Persona
{
 constructor(name, age,  studentId)
 {
    super(name,age);
 }

}

let ana = new Estudiante('Ana',25,'5000');

alert(ana.fullDatos());