var view = (function () {
    
    
    //search function
    var showResult = function (result,hit) {
        
        
        console.log(result,"show result");
        console.log(hit, "counter")
       
        
       
        var ul = document.getElementById('result-list');
        
        result.forEach(function(element, index) {
            
            console.log(index)
            var li = document.createElement("li");
            li.setAttribute("id", index);
            li.appendChild(document.createTextNode(element.firstName + " " + element.lastName))
            ul.appendChild(li)
            li.addEventListener("click", function(){       
                console.log(result[index].classes.length, "lenght")         
                showGradeResult(result[index], result[index].classes.length);
            })
        });   
        
    }
    
    function showGradeResult(student, numOfCourse){
        console.log(numOfCourse, 'num of courses')
        
        document.getElementById('grade-title').innerHTML = "Grade for " + student.firstName;
        
        document.getElementById('show-table').classList.replace('hideContent', 'showContent');
        var tb = document.getElementById('table-content');
        //check existing tr
        for (var i = 0; i < numOfCourse.length; i++) { 
            
        }
        
        var row = document.getElementById(numOfCourse-1)

        if(typeof(row) != 'undefined' && row != null)
        {
            console.log("already row");
            
        }

        student.classes.forEach(function(element, index){
            console.log(element.Course, "course");
            
            
            
            var tr = document.createElement("tr");
            tr.setAttribute("id", index)    
            var tdCourse = document.createElement("td");
            var tdGrade = document.createElement("td");
            
            
            tdCourse.appendChild(document.createTextNode(element.Course));            
            tr.appendChild(tdCourse);
            tb.appendChild(tr);
            tdGrade.appendChild(document.createTextNode(element.Grade));
            tr.appendChild(tdGrade);
            

        });
        
        

    }
    
    var showNoResult = function () {
        console.log("no result found");    
    }
    
   
    return {
        showResult: showResult,
        showNoResult: showNoResult
    }
})();
