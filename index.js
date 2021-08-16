var readline = require("readline-sync");
var score=0;
//Task 1: welcome user
function welcome(){
  var userName = readline.question("Whats your name ? ");
  console.log("Hi "+userName+", Welcome to do you know Advait's quiz ? ");
  
}
//Task 2: 5 question game
//Question-answer data array of objects
var questions=[
  {question:"Where do I live? ",
  answer:"Mumbai"
  },
   {question:"where do Advait work? ",
  answer:"Asian Paints"
  },
   {question:"what is Advait's favourite dish? ",
  answer:"Pav bhaji"
  },
  {question:"what Advait love? ",
  answer:"Coding"
  },
  {question:"which sports do Advait play most? ",
  answer:"Badminton"
  }
]
// High Score data
var highScores = [
  {
    name: "Advait",
    score: 5,
  },

  {
    name: "Mayur",
    score: 3,
  },
]
//play function
function play(question,answer){
  //ask question to user
  var userAns = readline.question(question);
  //check answer is right or not
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log("Yeah! right");
    score += 1;
  }else{
    console.log("oops !, wrong answer")
  }
  console.log("Current Score : ",score);
  console.log("---------------");

}
//Task 3: show highscore and endscore at end 
function showScores() {
  console.log("Yeah! You Scored: ", score);

  console.log("Check High score if you have scored more than this then send me pic");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

//Game begins
function game(){
  //iterate over questions from array
  for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}


welcome();
game();
showScores();