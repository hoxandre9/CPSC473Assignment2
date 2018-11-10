var controller = (function () {
    
    //search function
    var searchListener = function () {
        
        //init var
        var studentModel = model.listOfStudents;
        var counter = 0;
        //data bind user input
        var userInput = document.getElementById("search-text").value;
        
        //look for the user input from the list of student
        var result = studentModel.filter(function (studentModel) {
            return studentModel.lastName.toLowerCase() === userInput.toLowerCase();
        });
       
        //if student find, show result
        if (result.length !== 0){
            //show result         
            view.showResult(result);
           
           
        }else {
            //show not found message
            view.showNoResult();
        }
  
    }
    
    return {
        searchListener: searchListener
    }
})();
