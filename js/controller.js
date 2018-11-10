var controller = (function () {
    
    //search function
    var searchListener = function () {
        
        
        var studentModel = model.listOfStudents;
        var counter = 0;
        //data bind user input
        var userInput = document.getElementById("search-text").value;
        
        //look for the user input from the list of student
        var result = studentModel.filter(function (studentModel) {
            return studentModel.lastName.toLowerCase() === userInput.toLowerCase();
        });
       
        //if find show result
        if (result.length !== 0){
            //show result
            counter++;            
            view.showResult(result, counter);
           
           
        }else {
            //show not found
            view.showNoResult();
        }
 
               
    }

   
    
    var search = function (data) {
        $.each(listOfStudents, function (i, v) {
            if (v.LastName.toLowerCase() === data.toLowerCase()) {
                //view.displayStudent(v, i);
                console.log(v)
                counter++;
            }
        })
        
        listListener();
    }
    
    var listListener = function () {
        $('#student-list li').click(function () {
            if (counter > 0) {
                selectStudent(this.id);
            } else {
                return;
            }
        });
    }
    
    var selectStudent = function (id) {
        view.clearGrades();
        view.displayGrades(id);
    }
    
    return {
        searchListener: searchListener,
        listListener: listListener
    }
})();
