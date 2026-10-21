const panel=document.getElementById('panel');
const panelTitle=document.getElementById('panelTitle');
const panelContent=document.getElementById('panelContent');

const notes={
 Biology:{intro:'Biology is the scientific study of living organisms.',points:['Cells are the basic structural and functional units of life.','Photosynthesis allows green plants to make glucose using light energy.','An ecosystem includes organisms and their physical environment.']},
 Physics:{intro:'Physics studies matter, energy, motion and forces.',points:['Average speed = total distance ÷ total time.','A force can change an object’s motion or shape.','Energy can be transferred or transformed.']},
 Chemistry:{intro:'Chemistry studies substances, their properties and changes.',points:['Matter is made of particles such as atoms and molecules.','An element contains one type of atom.','Chemical reactions rearrange atoms to form new substances.']}
};
function show(title,html){panelTitle.textContent=title;panelContent.innerHTML=html;panel.classList.add('visible');panel.scrollIntoView({behavior:'smooth',block:'start'});}
document.querySelectorAll('[data-subject]').forEach(btn=>btn.addEventListener('click',()=>{
 const name=btn.dataset.subject,data=notes[name];
 show(name+' — Starter Notes','<p>'+data.intro+'</p><h3>Key points</h3><ul>'+data.points.map(p=>'<li>'+p+'</li>').join('')+'</ul><p><b>Tip:</b> Add notes from your own syllabus before sharing this app.</p>');
}));
document.getElementById('notesBtn').addEventListener('click',()=>show('Study Notes','<p>Choose Biology, Physics or Chemistry above to read starter notes.</p><p>To add your PDF notes, upload them to a file-hosting service and add the share links to this section in <code>app.js</code>.</p>'));
document.getElementById('videosBtn').addEventListener('click',()=>show('Video Lessons','<p>Add trusted lesson-video links here. Edit the video section in <code>app.js</code> and replace the example text with your video links.</p>'));
document.getElementById('quizBtn').addEventListener('click',()=>{
 show('Quick Science Quiz','<p><b>Question 1 of 3:</b> What is the basic structural unit of living organisms?</p><div id="quizOptions"><button class="quiz-option" data-correct="false">Atom</button><button class="quiz-option" data-correct="true">Cell</button><button class="quiz-option" data-correct="false">Organ</button></div><p id="quizFeedback" aria-live="polite"></p>');
 document.querySelectorAll('.quiz-option').forEach(b=>b.addEventListener('click',()=>{document.getElementById('quizFeedback').innerHTML=b.dataset.correct==='true'?'<span class="result">Correct! A cell is the basic unit of life. 🎉</span>':'Not quite. Try again!';}));
});
document.getElementById('closeBtn').addEventListener('click',()=>panel.classList.remove('visible'));
if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
