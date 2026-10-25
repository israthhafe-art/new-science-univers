if (notesBtn) {
  notesBtn.addEventListener('click', () => {
    show(
      '📘 Study Notes',
      
        <p>Choose a subject to explore its study notes.</p>
        <div class="category-list">
          ${Object.keys(subjects).map(name => 
            <button
              type="button"
              class="resource"
              data-subject="${name}"
              style="width:100%; margin:8px 0; text-align:left;"
            >
              <span>${subjects[name].icon}</span>
              <span class="resource-text">
                <strong>${name}</strong>
                <small>Open subject categories</small>
              </span>
              <b>→</b>
            </button>
          ).join('')}
        </div>
      
    );
  });
}

// Video Lessons button
const videosBtn = document.getElementById('videosBtn');

if (videosBtn) {
  videosBtn.addEventListener('click', () => {
    show(
      '🎥 Video Lessons',
      
        <p>Video lessons will be added here.</p>
        <p>You can add trusted educational video links later.</p>
      
    );
  });
}

// Quick Quiz button
const quizBtn = document.getElementById('quizBtn');

if (quizBtn) {
  quizBtn.addEventListener('click', () => {
    show(
      '📝 Quick Science Quiz',
      
        <p><strong>Question 1:</strong>
        What is the basic structural unit of living organisms?</p>

        <div id="quizOptions">
          <button type="button" class="quiz-option" data-correct="false">
            Atom
          </button>

          <button type="button" class="quiz-option" data-correct="true">
            Cell
          </button>

          <button type="button" class="quiz-option" data-correct="false">
            Organ
          </button>
        </div>

        <p id="quizFeedback" aria-live="polite"></p>
      
    );
  });
}

// Quiz answer checking using event delegation
document.addEventListener('click', event => {
  const answerButton = event.target.closest('.quiz-option');

  if (!answerButton) return;

  const feedback = document.getElementById('quizFeedback');

  if (!feedback) return;

  if (answerButton.dataset.correct === 'true') {
    feedback.textContent =
      'Correct! A cell is the basic structural unit of life.';
  } else {
    feedback.textContent = 'Not quite. Try again!';
  }
});

// Close learning panel
const closeBtn = document.getElementById('closeBtn');

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('visible');
  });
}

// Register service worker for supported web hosting
if (
  'serviceWorker' in navigator &&
  location.protocol.startsWith('http')
) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => {
      console.error('Service worker registration failed:', error);
    });
  });
}
