const hiraganaQuiz = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Japanese_Katakana_A.svg/180px-Japanese_Katakana_A.svg.png', romaji: 'a' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Japanese_Katakana_I.svg/180px-Japanese_Katakana_I.svg.png', romaji: 'i' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Japanese_Katakana_U.svg/180px-Japanese_Katakana_U.svg.png', romaji: 'u' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Japanese_Katakana_E.svg/180px-Japanese_Katakana_E.svg.png', romaji: 'e' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Japanese_Katakana_O.svg/180px-Japanese_Katakana_O.svg.png', romaji: 'o' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Japanese_Katakana_KA.svg/180px-Japanese_Katakana_KA.svg.png', romaji: 'ka' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Japanese_Katakana_KI.svg/180px-Japanese_Katakana_KI.svg.png', romaji: 'ki' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Japanese_Katakana_KU.png/180px-Japanese_Katakana_KU.png', romaji: 'ku' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Japanese_Katakana_KE.png/180px-Japanese_Katakana_KE.png', romaji: 'ke' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Japanese_Katakana_KO.png/180px-Japanese_Katakana_KO.png', romaji: 'ko' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Katakana_SA.svg/180px-Japanese_Katakana_SA.svg.png', romaji: 'sa' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Japanese_Katakana_SHI.png/180px-Japanese_Katakana_SHI.png', romaji: 'shi' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Japanese_Katakana_SU.png/180px-Japanese_Katakana_SU.png', romaji: 'su' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Japanese_Katakana_SE.png/180px-Japanese_Katakana_SE.png', romaji: 'se' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Japanese_Katakana_SO.png/180px-Japanese_Katakana_SO.png', romaji: 'so' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Japanese_Katakana_TA.png/180px-Japanese_Katakana_TA.png', romaji: 'ta' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Japanese_Katakana_CHI.png/180px-Japanese_Katakana_CHI.png', romaji: 'chi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Japanese_Katakana_TSU.svg/180px-Japanese_Katakana_TSU.svg.png', romaji: 'tsu' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Japanese_Katakana_TE.png/180px-Japanese_Katakana_TE.png', romaji: 'te' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Japanese_Katakana_TO.png/180px-Japanese_Katakana_TO.png', romaji: 'to' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Japanese_Katakana_NA.png/180px-Japanese_Katakana_NA.png', romaji: 'na' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Japanese_Katakana_NI.png/180px-Japanese_Katakana_NI.png', romaji: 'ni' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Japanese_Katakana_NU.svg/180px-Japanese_Katakana_NU.svg.png', romaji: 'nu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Japanese_Katakana_NE.png/180px-Japanese_Katakana_NE.png', romaji: 'ne' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Japanese_Katakana_NO.png/180px-Japanese_Katakana_NO.png', romaji: 'no' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Japanese_Katakana_HA.png/180px-Japanese_Katakana_HA.png', romaji: 'ha' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Japanese_Katakana_HI.png/180px-Japanese_Katakana_HI.png', romaji: 'hi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Japanese_Katakana_FU.png/180px-Japanese_Katakana_FU.png', romaji: 'fu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Japanese_Katakana_HE.png/180px-Japanese_Katakana_HE.png', romaji: 'he' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Japanese_Katakana_HO.png/180px-Japanese_Katakana_HO.png', romaji: 'ho' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Japanese_Katakana_MA.png/180px-Japanese_Katakana_MA.png', romaji: 'ma' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Japanese_Katakana_MI.png/180px-Japanese_Katakana_MI.png', romaji: 'mi' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Japanese_Katakana_MU.png/180px-Japanese_Katakana_MU.png', romaji: 'mu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Japanese_Katakana_ME.png/180px-Japanese_Katakana_ME.png', romaji: 'me' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Japanese_Katakana_MO.png/180px-Japanese_Katakana_MO.png', romaji: 'mo' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Japanese_Katakana_YA.png/180px-Japanese_Katakana_YA.png', romaji: 'ya' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Japanese_Katakana_YU.png/180px-Japanese_Katakana_YU.png', romaji: 'yu' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Japanese_Katakana_YO.png/180px-Japanese_Katakana_YO.png', romaji: 'yo' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Japanese_Katakana_RA.png/180px-Japanese_Katakana_RA.png', romaji: 'ra' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Japanese_Katakana_RI.png/180px-Japanese_Katakana_RI.png', romaji: 'ri' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Japanese_Katakana_RU.svg/180px-Japanese_Katakana_RU.svg.png', romaji: 'ru' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Japanese_Katakana_RE.png/180px-Japanese_Katakana_RE.png', romaji: 're' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Japanese_Katakana_RO.png/180px-Japanese_Katakana_RO.png', romaji: 'ro' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Japanese_Katakana_WA.png/180px-Japanese_Katakana_WA.png', romaji: 'wa' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Japanese_Katakana_N.png/180px-Japanese_Katakana_N.png', romaji: 'n' }  
];


let correctCount = 0;
let incorrectCount = 0;

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * hiraganaQuiz.length);
}

function loadQuestion() {
    const randomIndex = getRandomQuestionIndex();
    const question = hiraganaQuiz[randomIndex];
    document.getElementById('hiragana-image').src = question.image;
    document.getElementById('hiragana-image').dataset.answer = question.romaji;
    document.getElementById('romaji-input').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('romaji-input').value.trim().toLowerCase();
    const correctAnswer = document.getElementById('hiragana-image').dataset.answer;
    if (userAnswer === correctAnswer) {
        correctCount++;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        incorrectCount++;
        document.getElementById('feedback').textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }

    document.getElementById('correct-count').textContent = `Correct: ${correctCount}`;
    document.getElementById('incorrect-count').textContent = `Incorrect: ${incorrectCount}`;

    setTimeout(loadQuestion, 1000); 
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadQuestion();
});