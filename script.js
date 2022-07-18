const comput = ['pedra', 'papel', 'tesoura'];
const btnsPlay = document.querySelectorAll('.btn-option');

const startGame = () => {
  const result = event.target.alt;
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer(result);
  computerPlaying(result);
}

const btnStartGame = () => {
  for (let i = 0; i < btnsPlay.length; i++) {
    btnsPlay[i].addEventListener('click', startGame);
  }
}

btnStartGame()

/* const bntStone = document.querySelector('#bnt-stone');
bntStone.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('pedra');
  computerPlaying('pedra');
}); */

function checkComputerResponse() {
  const btnComputerAnswe = document.querySelector('#computer-answer');
  const imgComputerAnswer = btnComputerAnswe.querySelector('img');
  if (imgComputerAnswer) imgComputerAnswer.remove();
}

function checkYourAnswer() {
  const btnYourAnswe = document.querySelector('#your-answer');
  const imgYourAnswer = btnYourAnswe.querySelector('img');
  if (imgYourAnswer) imgYourAnswer.remove();
}

// Refatorando o código

/* const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('papel');
  computerPlaying('papel');
}); */

/* const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
  checkComputerResponse();
  checkYourAnswer();
  yourAnswer('tesoura');
  computerPlaying('tesoura');
}); */

function computerPlaying(result) {
  const num = Math.floor(Math.random() * 3);
  computerAnswer(num);
  gameResult(num, result);
}


function yourAnswer(result) {
  const yourAnswer = document.querySelector('#your-answer');
  const imgYourAnswer = document.createElement('img');
  const yourP = document.querySelector('.player-result');
  if (result === 'pedra') {
    imgYourAnswer.src = "fotos/pedra.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu PEDRA!'

  } else if (result === 'papel') {
    imgYourAnswer.src = "fotos/papel.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu PAPEL!'

  } else if (result === 'tesoura') {
    imgYourAnswer.src = "fotos/tesoura.jpg";
    imgYourAnswer.classList.add("imgYourAnswer");
    yourAnswer.appendChild(imgYourAnswer);
    yourP.innerHTML = 'Você escolheu TESOURA!'
  }
}

function computerAnswer(result) {
  const computerAnswer = document.querySelector('#computer-answer');
  const imgComputerAnswer = document.createElement('img');
  const computerP = document.querySelector('.computer-result');
  if (comput[result] === 'pedra') {
    imgComputerAnswer.src = "fotos/pedra.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu PEDRA';

  } else if (comput[result] === 'papel') {
    imgComputerAnswer.src = "fotos/papel.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu PAPEL';

  } else if (comput[result] === 'tesoura') {
    imgComputerAnswer.src = "fotos/tesoura.jpg";
    imgComputerAnswer.classList.add("imgComputerAnswer");
    computerAnswer.appendChild(imgComputerAnswer);
    computerP.innerHTML = 'Computador escolheu TESOURA';
  }
}


let contComputer = 0;
let contYour = 0;
function gameResult(computResult, yourResult) {
  const h1Result = document.querySelector('.winner');
  if (comput[computResult] === 'pedra' && yourResult === 'pedra') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if ((comput[computResult] === 'pedra') && (yourResult === 'papel')) {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'pedra' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'papel' && yourResult === 'pedra') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'papel' && yourResult === 'papel') {
    h1Result.innerHTML = 'EMPATOU!!!';
  } else if (comput[computResult] === 'papel' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'pedra') {
    h1Result.innerHTML = 'VOCÊ GANHOU!!!';
    contYour += 1;
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'papel') {
    h1Result.innerHTML = 'VOCÊ PERDEU!!!';
    contComputer += 1
    inputPoints(contComputer, contYour);
  } else if (comput[computResult] === 'tesoura' && yourResult === 'tesoura') {
    h1Result.innerHTML = 'EMPATOU!!!';
  }
}

function cleanPlayer() {
  const btnClean = document.querySelector('.btn-clean');
  btnClean.addEventListener('click', () => {
    document.querySelector('.winner').innerHTML = '';
    document.querySelector('.computer-result').innerHTML = '';
    document.querySelector('.player-result').innerHTML = '';
    document.querySelector('.your-points').innerHTML = 0;
    document.querySelector('.computer-points').innerHTML = 0;
    document.querySelector('.imgComputerAnswer').remove();
    document.querySelector('.imgYourAnswer').remove();
    contComputer = 0;
    contYour = 0;
  });
}

cleanPlayer();

function inputPoints(contComputer, contYour) {
  const yourPoints = document.querySelector('.your-points');
  yourPoints.innerHTML = contYour;
  const computerPoints = document.querySelector('.computer-points');
  computerPoints.innerHTML = contComputer;
}
