// Category selection.
panelContent.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');

  if (!button) return;

  showCategory(
    button.dataset.subjectName,
    button.dataset.category
  );
});

// Study Notes button.
document.getElementById('notesBtn').addEventListener('click', () => {
  show(
    'Study Notes',
    '<p>Choose Biology, Physics or Chemistry to explore the five study sections.</p>'
  );
});

// Video Lessons button.
document.getElementById('videosBtn').addEventListener('click', () => {
  show(
    'Video Lessons',
    '<p>Add trusted lesson-video links to the app.js file when they are ready.</p>'
  );
});

// Quick Science Quiz.
document.getElementById('quizBtn').addEventListener('click', () => {
  show(
    'Quick Science Quiz',
    
      <p><b>Question 1 of 3:</b> What is the basic structural unit of living organisms?</p>
      <div id="quizOptions">
        <button class="quiz-option" data-correct="false">Atom</button>
        <button class="quiz-option" data-correct="true">Cell</button>
        <button class="quiz-option" data-correct="false">Organ</button>
      </div>
      <p id="quizFeedback" aria-live="polite"></p>
    
  );

  document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('quizFeedback').textContent =
        button.dataset.correct === 'true'
          ? 'Correct! A cell is the basic unit of life.'
          : 'Not quite. Try again!';
    });
  });
});

// Close the panel.
document.getElementById('closeBtn').addEventListener('click', () => {
  panel.classList.remove('visible');
});

// Register service worker.
if (
  'serviceWorker' in navigator &&
  location.protocol.startsWith('http')
) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .catch(() => {});
  });
}
