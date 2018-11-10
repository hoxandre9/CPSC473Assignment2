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
    
    return {
        searchListener: searchListener,
        listListener: listListener
    }
})();
