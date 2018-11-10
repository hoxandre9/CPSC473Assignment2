var model = (function() {
    
    //list of the students
	var listOfStudents =[];
    
    //constructor
	function Student(firstName, lastName, classes) {
		this.firstName = firstName;
        this.lastName = lastName; 
        this.classes = classes;
    }
    
    var getStudent = function() {
        //student John Doe
    var jd = new Student(
        "John",
        "Doe", 
        [
            {
                Course: "CPSC 100",
                Grade: "D"
            },
            {
                Course: "CPSC 120",
                Grade: "A"
            }
        ]
    );

    //student Alex Doe
    var ad = new Student(
        "Alex",
        "Doe", 
        [
            {
                Course: "CPSC 230",
                Grade: "A"
            },
            {
                Course: "CPSC 520",
                Grade: "A"
            }
        ]
    );

    //student Spincer Smith
    var sm = new Student(
        "Spincer",
        "Smith", 
        [
            {
                Course: "CPSC 521",
                Grade: "B"
            },
            {
                Course: "CPSC 240",
                Grade: "A"
            }
        ]
    );

    listOfStudents.push(jd, ad, sm);

    }
    
    
console.log(listOfStudents, 'listOfStudent')

return{
    listOfStudents: listOfStudents,
    getStudent: getStudent
}
})();

model.getStudent();
