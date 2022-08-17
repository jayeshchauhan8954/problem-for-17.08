(function(){
    let temp = 20;
    let isRaining = true;

    if((temp >= 20 && temp <=25) && isRaining == false) {
        console.log("Yes you can go out and can play");
       }   else if ((temp >= 18 && temp <=20)&& isRaining == false){
        console.log("stay inside the play school")
       } else {
        console.log("Go home and stay there");
       }
    
})();