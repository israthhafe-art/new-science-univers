<p id="quizScore">
            Score: ${score}
          </p>

          <button id="nextQuestion" hidden>
            Next Question
          </button>
        
      );

      const optionButtons = document.querySelectorAll(
        '#quizOptions .quiz-option'
      );

      optionButtons.forEach(button => {

        button.addEventListener('click', () => {

          if (answered) return;

          answered = true;

          const selectedAnswer = Number(
            button.dataset.answerIndex
          );

          const feedback = document.getElementById('quizFeedback');
          const scoreBox = document.getElementById('quizScore');
          const nextButton = document.getElementById('nextQuestion');

          if (selectedAnswer === q.answer) {

            score++;

            feedback.textContent =
              'Correct! ' + q.explanation;

          } else {

            feedback.textContent =
              'Incorrect. ' +
              'Correct answer: ' +
              q.options[q.answer] +
              '. ' +
              q.explanation;

          }

          scoreBox.textContent =
            'Score: ' + score + ' / ' + quizQuestions.length;

          optionButtons.forEach(option => {
            option.disabled = true;
          });

          nextButton.hidden = false;

          nextButton.textContent =
            currentQuestion === quizQuestions.length - 1
              ? 'Show Final Score'
              : 'Next Question';

          nextButton.addEventListener('click', () => {

            currentQuestion++;

            if (currentQuestion < quizQuestions.length) {

              displayQuestion();

            } else {

              show(
                'Quiz Completed',

                
                  <h3>Well Done!</h3>

                  <p>
                    You have completed the Science Quiz.
                  </p>

                  <h2>
                    Your Score: ${score} / ${quizQuestions.length}
                  </h2>

                  <button id="restartQuiz">
                    Try Again
                  </button>
                `
              );

              const restartButton =
                document.getElementById('restartQuiz');

              if (restartButton) {

                restartButton.addEventListener('click', () => {

                  currentQuestion = 0;
                  score = 0;

                  displayQuestion();

                });

              }

            }

          }, { once: true });

        });

      });

    }

    displayQuestion();

  });

}


// ============================================
// SERVICE WORKER REGISTRATION
// ============================================

if (
  'serviceWorker' in navigator &&
  location.protocol.startsWith('http')
) {

  window.addEventListener('load', () => {

    navigator.serviceWorker
      .register('./sw.js')
      .catch(error => {
        console.log(
          'Service Worker registration failed:',
          error
        );
      });

  });

}


// ============================================
// APPLICATION LOADED
// ============================================

console.log(
  'New Science World - Students Zone loaded successfully!'
);
