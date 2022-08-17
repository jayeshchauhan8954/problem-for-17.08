(function(){

    function numberCheck(num){
        switch (true) {
            case num > 0:
                return "Positive Number";
                case num < 0:
                return "Negative Number";        
            default:
                return "Zero"
        }
    }
    
    console.log(numberCheck(89));
    console.log(numberCheck(89));
    console.log(numberCheck(-97));
    console.log(numberCheck(0));

})();