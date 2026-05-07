const quizqata = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Language",
    ],
    correct: 0,
  },

  {
    question: "CSS ka use kis liye hota hai?",
    options: [
      "Database banane ke liye",
      "Website Design ke liye",
      "Game banane ke liye",
      "Virus hatane ke liye",
    ],
    correct: 1,
  },

  {
    question: "JavaScript ka use kis liye hota hai?",
    options: [
      "Website ko Dynamic banane ke liye",
      "Computer band karne ke liye",
      "Printer chalane ke liye",
      "Folder delete karne ke liye",
    ],
    correct: 0,
  },

  {
    question: "Bootstrap kya hai?",
    options: ["Programming Language", "CSS Framework", "Browser", "Database"],
    correct: 1,
  },

  {
    question: "Java ka creator kaun hai?",
    options: ["Bill Gates", "James Gosling", "Elon Musk", "Mark Zuckerberg"],
    correct: 1,
  },
];

//step 2 JavaScript initialization
// const answerElm = document.querySelectorAll(".answer");
// const[questionElm, option-1,option-2,option-3,option-4]=
// document.querySelectorAll(
//     "#question, .option-1,.option-2,.option-3,.option-4"
// );
// const submitBtn = document.querySelector(#submit);
// const currentquiz=0;
// const score=0;

const answerElm = document.querySelectorAll(".answer");

const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option-1, .option-2, .option-3, .option-4",
  );

const submitBtn = document.querySelector("#submit");

let currentquiz = 0;
let score = 0;
