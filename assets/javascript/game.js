//window.onload = function() {

//    $("#img-1").click(stopwatch.recordLap);
//    $("#img-2").click(stopwatch.stop);
//    $("#img-3").click(stopwatch.reset);
//    $("#img-4").click(stopwatch.start);
//}

var wins = 0;
var losses = 0;
var computerScore = 39;
var yourScore = 0;
function random(){
  randomNumber = Math.floor(Math.random() * 52);
  };


$("#img-1").on("click", function() {
    yourScore = yourScore+3;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });
  
  $("#img-2").on("click", function() {
    yourScore = yourScore+7;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });

  $("#img-3").on("click", function() {
    yourScore = yourScore+5;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });

  $("#img-4").on("click", function() {
    yourScore = yourScore+4;
    $("#yourScore").text("Your Score: "+ yourScore);
    console.log(yourScore);
    result();
  });



function result() {
    if (yourScore === computerScore) {
        wins++;
        random();
        computerScore = randomNumber;
        yourScore = 0;
        $("#wins").text("Wins: "+ wins);
        $("#yourScore").text("Your Score: "+ yourScore);
        $("#computerScore").text("Computer Score: "+ computerScore);

    }
    else if (yourScore > computerScore) {
        losses++;
        computerScore = randomNumber;
        yourScore = 0;
        $("#losses").text("Loses: "+ losses);
        $("#yourScore").text("Your Score: "+ yourScore);
        $("#computerScore").text("Computer Score: "+ computerScore);
    }
}

