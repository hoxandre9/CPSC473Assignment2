var view = (function () {
    
    
    //show the result based on the search
    var showResult = function (result) {       
        
        //check if student result exist 
        var resultContentRow = document.getElementById('result-list');
        if(typeof(resultContentRow) != 'undefined' && resultContentRow != null)
        {
            resultContentRow.remove();               
        }
        
        //check if error msg is there
        var checkNotFound = document.getElementById('not-found');
        if(typeof(checkNotFound) != 'undefined' && checkNotFound != null)
        {
            document.getElementById('not-found').remove();              
        }        
        
        //set up the result as a unsorted list
        var resultContent = document.getElementById('result-content');
        var ul = document.createElement("ul")
        ul.setAttribute("id", "result-list")
        resultContent.appendChild(ul);
        document.getElementById('result-list').classList.replace('hideContent', 'showContent');        
        
        //display each student names
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
    
    //create new result content
    function createContent(){
        //create the grade title
        var resultGradeContent = document.getElementById('grade-content');
        var gradeTitle = document.createElement("h3");
        gradeTitle.setAttribute("id", "grade-title");
        resultGradeContent.appendChild(gradeTitle);
        //create the grade table
        var gradeTable = document.createElement("table");
        gradeTable.classList.add("table");
        gradeTable.setAttribute("id", "show-table");
        resultGradeContent.appendChild(gradeTable);
        //create the header of the table         
        var tHead = document.createElement("thead");
        gradeTable.appendChild(tHead);
        //create the row for the header of the table
        var tHeadRow = document.createElement("tr");
        tHead.appendChild(tHeadRow);
        //create the cell for the header of the table
        var tHeadCellGrade = document.createElement("th");
        var tHeadCellCourse = document.createElement("th");
        tHeadCellCourse.setAttribute("scope","col");
        tHeadCellGrade.setAttribute("scope", "col");
        tHeadCellCourse.appendChild(document.createTextNode("Course"));
        tHeadCellGrade.appendChild(document.createTextNode("GPA"))
        tHeadRow.appendChild(tHeadCellCourse);
        tHeadRow.appendChild(tHeadCellGrade);
        //create the body for the table
        var tBody = document.createElement("tbody");
        tBody.setAttribute("id", "table-content");
        gradeTable.appendChild(tBody);
        
    }
    
    //to show the grade result for a student
    function showGradeResult(student, numOfCourse){
        console.log(numOfCourse, 'num of courses')

        //check if the content exists or not
        var titleGrade = document.getElementById('grade-title');
        if(typeof(titleGrade) == 'undefined' || titleGrade == null)
        {
            console.log("not exitant so need to create");            
            createContent();
        }
        
        //data bind the result to the content
        document.getElementById('grade-title').innerHTML = "Grade for " + student.firstName;
        document.getElementById('show-table').classList.replace('hideContent', 'showContent');
        var tb = document.getElementById('table-content');
        //check existing table row
        for (var i = 0; i < numOfCourse; i++) { 
            var row = document.getElementById("row"+i);
            if(typeof(row) != 'undefined' && row != null)
            {
                //remove old table row from previous search
                row.remove();            
            }
            
        }
        
        student.classes.forEach(function(element, index){
            console.log(element.Course, "course"); 
            //create table row for the search result
            var tr = document.createElement("tr");
            tr.setAttribute("id", "row"+index)    
            var tdCourse = document.createElement("td");
            var tdGrade = document.createElement("td");
            
            //display the value of the student's course and gpa
            tdCourse.appendChild(document.createTextNode(element.Course));            
            tr.appendChild(tdCourse);
            tb.appendChild(tr);
            tdGrade.appendChild(document.createTextNode(element.Grade));
            tr.appendChild(tdGrade);           
            
        });
        
        
    }
    
    //trigger the not found result from the search
    var showNoResult = function () {
        
        //remove any non-related content for not found result
        var checkContent = document.getElementById('result-list');        
        if(typeof(checkContent) != 'undefined' && checkContent != null)
        {
            checkContent.remove(); 
            document.getElementById('grade-title').remove();
            document.getElementById('show-table').remove();            
        }
        
        //check error msg already there
        var checkNotFound = document.getElementById('not-found');
        if(typeof(checkNotFound) != 'undefined' && checkNotFound != null)
        {
            return;               
        }else {
            
            //create new html section to render not student found msg
            var parent = document.getElementById('result-content');
            var msg = document.createElement("p");
            msg.setAttribute("id", "not-found")
            msg.innerHTML = "Student not found";
            parent.appendChild(msg);
        }              
        
    }
    
    return {
        showResult: showResult,
        showNoResult: showNoResult
    }
})();
