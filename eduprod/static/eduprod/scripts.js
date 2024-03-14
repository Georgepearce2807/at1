document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    let questionsDisplayed = 0;                                            // <---- Adding variable to measure number of displayed questions
    let desiredQuestionAmount = 3;                                       
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length && questionsDisplayed < desiredQuestionAmount) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            btn.textContent = "Reveal Answer";
        } 
        else {
            content.innerHTML = "Reset quiz";                             // <---- Changes button to say Reset
            btn.textContent = "Reset";
        }
    }

     
     function shuffleQuestions() {                                        // <---- Function to shuffle the questions array
         for (let i = questions.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [questions[i], questions[j]] = [questions[j], questions[i]];
         }
     }

    shuffleQuestions();                                                  // <---- Runs the functions made above 
    displayQuestion();

    btn.addEventListener("click", function() {                           // <---- Reveals answer and sets button text to Next Question
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
            questionsDisplayed++;
        } 
        else if (btn.textContent === "Reset") {                          // <---- Reset button which reloads the page upon Reset
            window.location.reload();
        }
        else {
            currentQuestionIndex++;                                      // <---- Adds one to the Question index to proceed throught the questions list
            displayQuestion();
        }
    });
});