var step = 1;
var age; 
$(".starter").click(function(){
  $(".words").text("How old are you?");
   var selector=$("selector").val(); 
    //  step=1+step;  
    age = (".selector").val;
});
$(".starter2").click(function(){
  $(".words2").text("When You Get up in the morning, Are you Energetic or slow?");
   var morning = (".selector2").val;
  
});
$(".starter3").click(function(){
  $(".words3").text("Once you wake up are you productive in the morning, or are you lazy?");
  var energy = (".selector3").val;
});
$(".starter4").click(function(){
  $(".words4").text("How would you describe yourself as, Polite or Ignorant?");
  var personality = (".selector4").val;
});
$(".starter").click(function(){
     var end;
     if ((end === "productive" && "ignorant") || age >= 25 && "ingnorant"){ 
         $(".results").text("You're are squidward!");
         
     }
     
});