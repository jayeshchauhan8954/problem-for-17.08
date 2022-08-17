(function(){
    
    function checkMarks(marks){
        return marks >=40 ? "Passed" : "Failed";

    }

    // let output = checkMarks(45);
    // console.log(output);

    console.log(checkMarks(40));
    console.log(checkMarks(45));
    console.log(checkMarks(80));
    console.log(checkMarks(29));
})();