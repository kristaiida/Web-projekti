var minimum = 1;
var maximum = 10;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int3 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int4 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int5 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int6 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int7 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int8 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int9 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int10 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
document.getElementById("question1").innerHTML = "How much is " + int1 + " " + "+" + " " + int2 + " ?";
var qanswer1 = int1 + int2;
document.getElementById("question2").innerHTML = "How much is " + int3 + " " + "-" + " " + int4 + " ?";
var qanswer2 = int3 - int4;
document.getElementById("question3").innerHTML = "How much is " + int5 + " " + "x" + " " + int6 + " ?";
var qanswer3 = int5 * int6;
document.getElementById("question4").innerHTML = "How much is " + int7 + " " + "/" + " " + int8 + " ?";
var qanswer4 = int7 / int8;
document.getElementById("question5").innerHTML = "How much is " + int9 + " " + "x" + " " + int10 + " ?";
var qanswer5 = int9 * int10;
 
    function fire() {
var uanswer = document.getElementById("answer").value;
      if (uanswer == qanswer1 || uanswer == qanswer2 || uanswer == qanswer3 || uanswer == qanswer4 || uanswer == qanswer5) {

        
        alert("Correct!")
        
        
        
        
      } else {
        alert("WRONG!")
      }
    }

   
