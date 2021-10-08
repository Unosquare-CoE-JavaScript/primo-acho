var students = [{name: "harry", age: 18, subjects: [] }, {name: "Peter", age: 24, subjects:[] }, {name: "Karl", age: 15 , subjects:[]}];
var courses = ["biology", "Math", "history"];
//Global scope
function suscribeStudent(studentID, courseID) {
    //first blockscope
    const mayorityAge = 18;
    if ( students[studentID].age < mayorityAge ) {
        //second Scope
        //variable course is shadowing var from global scope
        let courses = ["basic Biology", "Basic Maths", "basics history"];
        let student = students[studentID];
        //arrow function is generating a fourth scope
        if(student.subjects.some(subject=>subject===courses[courseID])){
            //just blocks nos generating a new scope
            console.log("you are already subscribed to the subject")
        } else {
            student.subjects.push(courses[courseID])
            console.log(students);
        }
    } else {
        //third Scope
        // just accesing to global variables
        let student = students[studentID];
        //arrow function is generating a fourth scope
        if(student.subjects.some(subject=>subject===courses[courseID])){
            console.log("you are already subscribed to the subject")
        } else {
            student.subjects.push(courses[courseID])
            console.log(students);
        }
    }
}

suscribeStudent(2, 0);
suscribeStudent(2,1);