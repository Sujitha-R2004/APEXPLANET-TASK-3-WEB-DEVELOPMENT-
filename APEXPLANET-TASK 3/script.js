







document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      q: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      q: "Which language runs in a web browser?",
      options: ["Python", "Java", "C++", "JavaScript"],
      answer: "JavaScript"
    },
    {
      q: "What does CSS stand for?",
      options: ["Color Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
      answer: "Cascading Style Sheet"
    },
    {
      q: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      q: "What year was JavaScript created?",
      options: ["1995", "1990", "2000", "1998"],
      answer: "1995"
    }
  ];

  let current = 0;
  const questionBox = document.getElementById("questionBox");
  const optionsBox = document.getElementById("optionsBox");

  function loadQuestion(index) {
    const q = questions[index];
    questionBox.innerText = q.q;
    optionsBox.innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === q.answer) alert("✅ Correct!");
        else alert("❌ Wrong!");
        setTimeout(nextQuestion, 300);
      };
      optionsBox.appendChild(btn);
    });
  }

  function nextQuestion() {
    current = (current + 1) % questions.length;
    loadQuestion(current);
  }

  loadQuestion(current);

 const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur"
];


  let currentImg = 0;

  function showImage() {
    document.getElementById("carouselImage").src = images[currentImg];
  }

  window.nextImage = function() {
    currentImg = (currentImg + 1) % images.length;
    showImage();
  };

  window.prevImage = function() {
    currentImg = (currentImg - 1 + images.length) % images.length;
    showImage();
  };

  showImage();

  window.getJoke = async function() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("jokeText").textContent = `${data.setup} — ${data.punchline}`;
  };
});