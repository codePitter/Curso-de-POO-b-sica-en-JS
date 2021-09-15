/*const juan = {
    name: "Juanito",
    age: 18,
    approvesCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log("This", this);
        console.log("This.approvesCourses", this.approvesCourses);

        this.approvesCourses.push(newCourse);
    }
};

//para agregar un curso podríamos hacer lo siguiente
juan.addCourse("Curso 2");

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

Object.defineProperty(juan, "navigator", {
     value: "Chrome",
     enumerable: false,
     writable: true,
     configurable: true,
});

Object.defineProperty(juan, "pruebaNasa", {
     value: "Extraterrestres",
     enumerable: false,
     writable: false,
     configurable: false,
});

Object.defineProperty(juan, "editor", {
     value: "VS Code",
     enumerable: true,
     writable: false,
     configurable: true,
});

Object.defineProperty(juan, "terminal", {
     value: "Windows",
     enumerable: true,
     writable: true,
     configurable: false,
});

Object.seal(juan);// cambia la propiedad canfigurable a false lo que no deja que se borre
Object.freeze(juan);// no deja que se edite ni se borre

console.log(Object.getOwnPropertyDescriptors(juan));

console.log(Object.getOwnPropertyDescriptors(juan));
console.log(juan);
*/

// const obj2 = {};

// for (prop in obj1){
//     obj2[prop] = obj1[prop];
// }

/* funciona bien hasta que aparece un objeto dentro de objeto
Al modificar el objeto c, d se van a modificar ambos obj
*/

//const obj3 = Object.assign({}, obj1);
/*
en este caso al vambiar el origen cambia la copia
*/

//const obj4 = Object.create(obj1);
/*
crea el objeto 4 con la propiedades del obj1 pero dentro de proto
al asignarle otro valor a "a:" se crea una nueva propiedad a: con el nuevo valor pero quedan los 2 

//a: "nuevo valor"
    __proto__:
        a: "a"

agrega "a: 'nuevo valor'" como si fuera un nuevo valor manteniendo las propiedades heredadas de obj1

al modificar un objeto dentro de un objeto en el original tambièn afecta el __proto__ heredado
*/

//******** JSON.parse y JSON.stringify ********

//const obj2 = JSON.stringify(obj1);

// {"a":"a","b":"b","c":{"d":"d","c":"c"}} crea un string del obj1

/*
const stringifyComplexObj = JSON.stringify(obj1);

const obj2 = JSON.parse(stringifyComplexObj);

 convierte el string creado en un objeto
{a: 'a', b: 'b', c: {…}}
    a: "a"  
    b: "b"
    c: {d: 'd', c: 'c'}
    [[Prototype]]: Object
*/

/*
function recursica(param){
    console.log(param);
    if(validacion){
        //llamados recursivos
    } else {
        //llamados normales
    }
}

let numeritos = [0,1,2,3,4,5,6,7,8,9,23,15];
let numerito = 0;

for (let index = 0; index < numeritos.length; index++){
    numerito = numeritos[index]
    console.log({ index, numerito })
}

let numeritos = [0,1,2,3,4,5,6,7,8,9,23,15];

function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNumber = numbersArray[0];
        console.log(firstNumber);
        numbersArray.shift();
        recursiva(numbersArray);
    }
}
*/

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA(){
        this.a = "AAAAA";
    }
};

function isObject(subject){
    return typeof subject == "object";
};

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if(subjectIsObject){
        copySubject = {};
    } else{
        return subject;
    }

    console.log(copySubject);

    for(key in subject){
        const keyIstObject = isObject(subject[key]);

        if(keyIstObject){
            copySubject[key] = deepCopy(subject[key]);
            console.log(copySubject[key]);
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}