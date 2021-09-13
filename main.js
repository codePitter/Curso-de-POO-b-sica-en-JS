class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}



function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com";
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com";
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

const clase67 = new PlatziClass({
    name: "Ejemplo1",
    videoID: "ID del video",
});

clase67.reproducir();
clase67.pausar();










class Classes{
    constructor(classes){
        this.classes;
    }
}
class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    };
    get name(){
        return this._name;
    };

    set name(nuevoNombre){
        //le agregamos restricciones al posible cambio de nombre por parte de terceros por medio de if, en este caso.
        if (nuevoNombre === "Curso Malo de Programacián básica"){
            console.error("Wey.. no");
        } else {
            this._name = nuevoNombre;
        }
    }

    // changeName(nuevoNombre){
    //     this._name = nuevoNombre;
    // } *1
};

const cursoProgBasica = new Course({
    name: "Curso gratis de programación Básica",
    isFree: true,
});

cursoProgBasica.name;
// "Curso gratis de programación Básica"

//*1 una forma de cambiar el nombre del curso. Crear un método.
//cursoProgBasica.changeName("nuevo nombre de curso");
//otra forma serìa:
//cursoProgBasica.name = "Nuevo nombre del curso 1"

const cursoDefHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    lang: "english",
});

class learningPaths{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new learningPaths({
    name: "Escuela de desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefHTML,
        cursoPracHTML,
    ],
});

const escuelaDataScience = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Dataviz",
    ],
});

const escuelaVideoJuegos = new learningPaths({
    name: "Escuela de video juegos",
    courses: [
        cursoProgBasica,
        "Curso Unreal Engine",
        "Curso Unity 3D",
    ],
});






class Student {
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;

    }
    publicarComentario(CommentContent){
        const comment = new Comment({
            content: CommentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.aprovedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        }
    }
};

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.aprovedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés")
        }
    }
};

class expertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
};


class teacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
    publicarComentario(CommentContent){
        const comment = new Comment({
            content: CommentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        comment.publicar();
    }
};



const juan = new FreeStudent({
    name: "JuanDC",
    username: "Juanito",
    email: "Juanito@gmail.com",
    twitter: "juanitoTwitter",
    learningPaths: [
        escuelaWeb,
        escuelaVideoJuegos,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguel",
    username: "migleuser",
    email: "miguel@gmail.com",
    facebook: "miguelfacebook",
}); 

const Freddy = new teacherStudent({
    name: "Freddy Vega",
    username: "freddyuser",
    email: "freddy@gmail.com",
    instagram: "freddyinsta",
}); 