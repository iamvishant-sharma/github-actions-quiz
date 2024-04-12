// Sample quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    // Add more questions as needed
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  const timeLimitPerQuestion = 10; // Time limit in seconds for each question
  
  // Function to load question and options
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
  
    // Clear previous question and options
    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    resultElement.innerText = '';
  
    // Load current question
    questionElement.innerText = quizData[currentQuestion].question;
  
    // Load options
    quizData[currentQuestion].options.forEach((option, index) => {
      const inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = 'option';
      inputElement.id = `option${index}`;
      inputElement.value = option;
      const labelElement = document.createElement('label');
      labelElement.htmlFor = `option${index}`;
      labelElement.innerText = option;
      optionsElement.appendChild(inputElement);
      optionsElement.appendChild(labelElement);
    });
  
    // Start timer
    startTimer();
  }
  
  // Function to start timer
  function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = timeLimitPerQuestion;
    timerElement.innerText = `Time left: ${timeLeft}`;
  
    const timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.innerText = `Time left: ${timeLeft}`;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        checkAnswer(); // Automatically move to the next question when time expires
      }
    }, 1000);
  }
  
  // Function to check answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }
  
    if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show result
  function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your score: ${score} / ${quizData.length}`;
  }
  
  // Load first question
  loadQuestion();
  
  // Event listener for submit button
  document.getElementById('submit-btn').addEventListener('click', checkAnswer);
  