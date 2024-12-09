//references
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const LīmenisSelect = document.getElementById('Līmenis');

// List of words for game(Vārdu saraksts spēlei)
const words = [
  'sēta',
  'tense',
  'lidmašīna',
  'bļoda',
  'piešūt',
  'juice',
  'warlike',
  'bārs',
  'north',
  'dependent',
  'steer',
  'sīlis',
  'highfalutin',
  'supermalači',
  'quince',
  'eight',
  'fīders',
  'admit',
  'drag',
  'loving'
];

// Init word(Sākotnējais vārds)mainīgie
let randomWord;

// Init score(Sākotnējais rezultāts)
let score = 0;

// Init time(Sākuma laiks)
let time = 20;

// Set difficulty to value in ls or medium(Iestatiet grūtības vērtību ls vai vidējs)
let Līmenis =
  localStorage.getItem('Līmenis') !== null
    ? localStorage.getItem('Līmenis')
    : 'vidēji';

// Set difficulty select value (grūtības atlases līmenis)
LīmenisSelect.value =
  localStorage.getItem('Līmenis') !== null
    ? localStorage.getItem('Līmenis')
    : 'vidēji';

// Focus on text on start (koncetrēšanās uztekstu sākumā)
text.focus();

// Start counting down (skaitīt uz leju)
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array(Ģenerējiet vārdu no masīva)
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM(Pievienojiet vārdu DOM)
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score(Atjaunināt rezultātu)
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time(Atjaunināšanas laiks)
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Laiks beidzies!</h1>
    <p>Jūsu rezultāts ir : ${score}</p>
    <button onclick="location.reload()">Atsākt</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (Līmenis === 'smagi') {
      time += 2;
    } else if (Līmenis === 'vidēji') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  Līmenis = e.target.value;
  localStorage.setItem('Līmenis', Līmenis);
});
