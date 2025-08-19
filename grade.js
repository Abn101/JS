const gradeTracker = {
    students: {},
    addStudent: function (name) {
        if (!Object.keys(this.students).includes(name)) {
            this.students[name] =
            {
                courses: {},
            }
            console.log("Student added: ", name);
        }
        else {
            console.log("Student already exsist");
        }

    },
    addCourse: function (courseName, name) {
        if (!Object.keys(this.students).includes(name)) {
            console.log("Student doesnt exsist");
        }
        else if (!this.students[name].courses[courseName]) {
            this.students[name].courses[courseName] =
            {
                grade: [],
            }
            console.log("course: ", courseName, " added to student: ", name);
        }
        else {
            console.log("course already exsist");
        }

    },
    addGrade: function (number, courseName, name) {
        if (!Object.keys(this.students).includes(name)) {
            console.log("Student doesnt exsist");
        }
        else if (this.students[name].courses[courseName]) {
            let grade = this.gradeCategory(number);
            this.students[name].courses[courseName].grade.push(grade);
            console.log("Grade Added to Studetn", name, " of course ", courseName)
        }
        else {
            console.log("grade not added");
        }
    },
    gradeCategory: function (number) {
        if (number >= 90) {
            return "A";
        }
        else if (number >= 80) {
            return "B"
        }
        else if (number >= 70) {
            return "C"
        }
        else if (number >= 60) {
            return "D"
        }
        else if (number >= 50) {
            return "E"
        }
        else return "F"
    },
    report: function (name) {
        if (this.students[name]) {
            console.log("report for: ", name);
            console.log("Courses");
            console.log(this.students[name].courses);
        }
        else {
            console.log("Student doesnot exsist");
        }
    }
}
gradeTracker.addStudent("Ali");
gradeTracker.addCourse("Math", "Ali");
gradeTracker.addCourse("Physics", "Ali");
gradeTracker.addGrade(95, "Math", "Ali");
gradeTracker.addGrade(82, "Physics", "Ali");
gradeTracker.report("Ali");