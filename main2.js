const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Cursos Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

function Student({
    name,
    age,
    cursosAprobados = [],
    email,
}) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
};

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso a la introducción a la producción de Videojuegos",
        "Curso de creación de Personajes",
    ],
)
// Vamos a hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

//Prototipos con la sintaxis de Clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    //crear un mètodo dentro de la clase, en este caso this hace ref. a Student2
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
//crear una nueva instancia
const miguel = new Student2({
        name: "Miguel",
        age: 28,
        email: "miguel@gmail.com",
});