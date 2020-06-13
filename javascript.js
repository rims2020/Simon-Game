buttonColours=["red", "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[];
var level=1;
$("#level-title").click(function(){
    
    
    nextSequence();});
function nextSequence(){
    $("h1").text("Level "+level);
    userClickedPattern=[];    
    var randomNumber=Math.floor(Math.random()*4);
    
    $("#"+buttonColours[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(buttonColours[randomNumber]);
    
    animatePress(buttonColours[randomNumber]);
    playsound(buttonColours[randomNumber]);
}

function animatePress(currentColour)
{
$("#"+currentColour).addClass("pressed");
setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
},200);


}
       function playsound(key)
{        switch(key)
        {
case "blue":
    var audio1=new Audio("sounds/blue.mp3");
        audio1.play();
        break;
        case "red":
    var audio2=new Audio("sounds/red.mp3");
        audio2.play();
        break;
        case "green":
    var audio3=new Audio("sounds/green.mp3");
        audio3.play();
        break;
        case "yellow":
    var audio4=new Audio("sounds/yellow.mp3");
        audio4.play();
        break;
        case "blue":
            default:
    var audio5=new Audio("sounds/wrong.mp3");
        audio5.play();
        break;

        }
      }
 $(".btn").click(function()
    {   
        
        var userchoosenColor=$(this).attr("id");
    
        userClickedPattern.push(userchoosenColor);
    
        
        playsound(userchoosenColor);   
        animatePress(userchoosenColor);
        
        checkAnswer(userClickedPattern.length-1);       

    });  
 
function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    
   {
    if(gamePattern.length===userClickedPattern.length)
{
       level++;
            
       setTimeout(function () {
        nextSequence();
      }, 1000);

    }
else
{
    
}
}
   else{
       var audio7=new Audio("sounds/wrong.mp3");
       audio7.play();
       $("h1").text("GAME OVER PRESS HERE TO CONTINUE");
       $("body").addClass("game-over");
setTimeout(function(){
$("body").removeClass("game-over");
startover();
},200);
    
   }
}

function startover()
{
level=1;
gamePattern=[];
}




/*$("#"+buttonColours[randomNumber]).click(function()


       console.log("success");
       if(gamePattern.length===userClickedPattern.length)
       {
        setTimeout(function () {
            nextSequence();
          }, 1000);
   } }
   else{
       console.log("wrong");

*/