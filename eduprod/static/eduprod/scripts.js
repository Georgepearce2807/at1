document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            btn.textContent = "Reveal Answer";
        } else {
            content.innerHTML = "Reset quiz";
            btn.textContent = "Reset";
        }
    }

     
     function shuffleQuestions() {                                        // <---- Function to shuffle the questions array
         for (let i = questions.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [questions[i], questions[j]] = [questions[j], questions[i]];
         }
     }

    shuffleQuestions();
    displayQuestion();

    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
        } else {
            currentQuestionIndex++;
            displayQuestion();
        }
    });
});