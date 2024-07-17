const hiraganaQuiz = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/120px-Japanese_Hiragana_kyokashotai_A.svg.png', romaji: 'a' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Japanese_Hiragana_kyokashotai_I.svg/120px-Japanese_Hiragana_kyokashotai_I.svg.png', romaji: 'i' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Japanese_Hiragana_kyokashotai_U.svg/120px-Japanese_Hiragana_kyokashotai_U.svg.png', romaji: 'u' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Japanese_Hiragana_kyokashotai_E.svg/120px-Japanese_Hiragana_kyokashotai_E.svg.png', romaji: 'e' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Japanese_Hiragana_kyokashotai_O.svg/120px-Japanese_Hiragana_kyokashotai_O.svg.png', romaji: 'o' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Japanese_Hiragana_kyokashotai_KA.svg/120px-Japanese_Hiragana_kyokashotai_KA.svg.png', romaji: 'ka' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_KI.svg/120px-Japanese_Hiragana_kyokashotai_KI.svg.png', romaji: 'ki' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_KU.svg/120px-Japanese_Hiragana_kyokashotai_KU.svg.png', romaji: 'ku' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_KE.svg/120px-Japanese_Hiragana_kyokashotai_KE.svg.png', romaji: 'ke' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_KO.svg/120px-Japanese_Hiragana_kyokashotai_KO.svg.png', romaji: 'ko' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Hiragana_kyokashotai_SA.svg/120px-Japanese_Hiragana_kyokashotai_SA.svg.png', romaji: 'sa' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_Hiragana_kyokashotai_SI.svg/120px-Japanese_Hiragana_kyokashotai_SI.svg.png', romaji: 'shi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_SU.svg/120px-Japanese_Hiragana_kyokashotai_SU.svg.png', romaji: 'su' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Japanese_Hiragana_kyokashotai_SE.svg/120px-Japanese_Hiragana_kyokashotai_SE.svg.png', romaji: 'se' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Hiragana_kyokashotai_SO.svg/120px-Japanese_Hiragana_kyokashotai_SO.svg.png', romaji: 'so' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/120px-Japanese_Hiragana_kyokashotai_TA.svg.png', romaji: 'ta' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Japanese_Hiragana_kyokashotai_TI.svg/120px-Japanese_Hiragana_kyokashotai_TI.svg.png', romaji: 'chi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Japanese_Hiragana_kyokashotai_TU.svg/120px-Japanese_Hiragana_kyokashotai_TU.svg.png', romaji: 'tsu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Japanese_Hiragana_kyokashotai_TE.svg/120px-Japanese_Hiragana_kyokashotai_TE.svg.png', romaji: 'te' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Japanese_Hiragana_kyokashotai_TO.svg/120px-Japanese_Hiragana_kyokashotai_TO.svg.png', romaji: 'to' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Japanese_Hiragana_kyokashotai_NA.svg/120px-Japanese_Hiragana_kyokashotai_NA.svg.png', romaji: 'na' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Japanese_Hiragana_kyokashotai_NI.svg/120px-Japanese_Hiragana_kyokashotai_NI.svg.png', romaji: 'ni' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Japanese_Hiragana_kyokashotai_NU.svg/120px-Japanese_Hiragana_kyokashotai_NU.svg.png', romaji: 'nu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Japanese_Hiragana_kyokashotai_NE.svg/120px-Japanese_Hiragana_kyokashotai_NE.svg.png', romaji: 'ne' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Japanese_Hiragana_kyokashotai_NO.svg/120px-Japanese_Hiragana_kyokashotai_NO.svg.png', romaji: 'no' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Japanese_Hiragana_kyokashotai_HA.svg/120px-Japanese_Hiragana_kyokashotai_HA.svg.png', romaji: 'ha' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/%E3%81%B2_%E6%95%99%E7%A7%91%E6%9B%B8%E4%BD%93.svg/120px-%E3%81%B2_%E6%95%99%E7%A7%91%E6%9B%B8%E4%BD%93.svg.png', romaji: 'hi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Japanese_Hiragana_kyokashotai_HU.svg/120px-Japanese_Hiragana_kyokashotai_HU.svg.png', romaji: 'fu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Japanese_Hiragana_kyokashotai_HE.svg/120px-Japanese_Hiragana_kyokashotai_HE.svg.png', romaji: 'he' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Japanese_Hiragana_kyokashotai_HO.svg/120px-Japanese_Hiragana_kyokashotai_HO.svg.png', romaji: 'ho' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Japanese_Hiragana_kyokashotai_MA.svg/120px-Japanese_Hiragana_kyokashotai_MA.svg.png', romaji: 'ma' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Japanese_Hiragana_kyokashotai_MI.svg/120px-Japanese_Hiragana_kyokashotai_MI.svg.png', romaji: 'mi' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Japanese_Hiragana_kyokashotai_MU.svg/120px-Japanese_Hiragana_kyokashotai_MU.svg.png', romaji: 'mu' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Japanese_Hiragana_kyokashotai_ME.svg/120px-Japanese_Hiragana_kyokashotai_ME.svg.png', romaji: 'me' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Japanese_Hiragana_kyokashotai_MO.svg/120px-Japanese_Hiragana_kyokashotai_MO.svg.png', romaji: 'mo' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Japanese_Hiragana_kyokashotai_YA.svg/120px-Japanese_Hiragana_kyokashotai_YA.svg.png', romaji: 'ya' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Japanese_Hiragana_kyokashotai_YU.svg/120px-Japanese_Hiragana_kyokashotai_YU.svg.png', romaji: 'yu' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Japanese_Hiragana_kyokashotai_YO.svg/120px-Japanese_Hiragana_kyokashotai_YO.svg.png', romaji: 'yo' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_RA.svg/120px-Japanese_Hiragana_kyokashotai_RA.svg.png', romaji: 'ra' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Japanese_Hiragana_kyokashotai_RI.svg/120px-Japanese_Hiragana_kyokashotai_RI.svg.png', romaji: 'ri' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_RU.svg/120px-Japanese_Hiragana_kyokashotai_RU.svg.png', romaji: 'ru' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Japanese_Hiragana_kyokashotai_RE.svg/120px-Japanese_Hiragana_kyokashotai_RE.svg.png', romaji: 're' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Japanese_Hiragana_kyokashotai_RO.svg/120px-Japanese_Hiragana_kyokashotai_RO.svg.png', romaji: 'ro' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Japanese_Hiragana_kyokashotai_WA.svg/120px-Japanese_Hiragana_kyokashotai_WA.svg.png', romaji: 'wa' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Japanese_Hiragana_kyokashotai_WO.svg/120px-Japanese_Hiragana_kyokashotai_WO.svg.png', romaji: 'wo' }, 
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_N.svg/120px-Japanese_Hiragana_kyokashotai_N.svg.png', romaji: 'n' }  
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


