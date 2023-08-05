const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
]

let answers = [];

const askQuestion = function(i) {
  if (i < questions.length) {
    rl.question(questions[i] + " ", (answer) => {
      answers.push(answer);
      askQuestion(i + 1);
    });
  } else {
    rl.close();
    console.log(`Hey there, my name is ${answers[0]} and I love to ${answers[1]} while listening to some ${answers[2]}. My favourite meal is ${answers[3]}. Specifically, I love ${answers[4]} for ${answers[3]}. I'm an enjoyer of ${answers[5]}. Also, did I mention I'm AMAZING at ${answers[6]}?`);
  }
}

askQuestion(0);