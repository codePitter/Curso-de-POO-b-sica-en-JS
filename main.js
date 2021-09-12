class Student {
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        leraningPaths = [],
    }){
        this.name = name;
        this.usernam = eusername;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;

    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "Juanito",
    email: "Juanito@gmail.com",
    twitter: "juanitoTwitter",
});

const miguelito2 = new Student({
    name: "Miguel",
    username: "migleuser",
    email: "miguel@gmail.com",
    facebook: "miguelfacebook",
}); 