var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
  ];

for(i = 0; i < questions.length; i++){
  
  // var response = need to make a variable for students selected answer and store it in local memory

  if(response === question[i].answer){
      // in here I put what happens if questions answered correctly
  }
  
  else(response !== questions[i].answer){
    // in here put what happens if question is answered incorrectly
  }

}
