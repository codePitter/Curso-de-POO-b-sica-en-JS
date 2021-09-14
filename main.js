const juan = {
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
//juan.addCourse("Curso 2");

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });

// Object.defineProperty(juan, "pruebaNasa", {
//     value: "Extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });

// Object.defineProperty(juan, "editor", {
//     value: "VS Code",
//     enumerable: true,
//     writable: false,
//     configurable: true,
// });

// Object.defineProperty(juan, "terminal", {
//     value: "Windows",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// });

//Object.seal(juan);// cambia la propiedad canfigurable a false lo que no deja que se borre
Object.freeze(juan);// no deja que se edite ni se borre

console.log(Object.getOwnPropertyDescriptors(juan));

console.log(Object.getOwnPropertyDescriptors(juan));
console.log(juan);