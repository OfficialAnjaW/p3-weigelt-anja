// Global Variables

// Variables Layer 1

const layerOne = document.getElementById('layer-one');
const wordBoxes = document.getElementsByClassName('word-block');

// Variables Layer 2

const layerTwo = document.getElementById('layer-two');
const numberBoxesOne = document.getElementsByClassName('number-block-one');

// Variables Layer 3

const layerThree = document.getElementById('layer-three');
const numberBoxesTwo = document.getElementsByClassName('number-block-two');

// Variables Layer 4

const layerFour = document.getElementById('layer-four');

// Variables Steps (Paragraphs)

const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const stepThree = document.getElementById('step-three');
const stepFour = document.getElementById('step-four');

// Action (1): Word Loop

// Functionality: Loop Through (1)

function loopThroughOne() {

  const changeColorOne = () => this.classList.toggle('button-flash');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColorOne, i * 1000);
  };

};

// Functionality: Change Layer (1)

function changeLayerOne() {
  const swapOne = () => {
    stepOne.classList.add('hide');
    stepTwo.classList.remove('hide');
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swapOne, this.textContent.length * 2 * 1000);
}

// Event Listener (1)

for (let i = 0; i < wordBoxes.length; i++) {
  wordBoxes[i].addEventListener('click', loopThroughOne);
  wordBoxes[i].addEventListener('click', changeLayerOne);
};

// Action (2): First Number Loop

// Functionality: Loop Through (2)

function loopThroughTwo() {

  const changeColorTwo = () => this.classList.toggle('button-flash');

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorTwo, i * 1000);
  };

};

// Functionality: Change Layer (2)

function changeLayerTwo() {
  const swapTwo = () => {
    stepTwo.classList.add('hide');
    stepThree.classList.remove('hide');
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swapTwo, Number(this.textContent) * 2 * 1000);
}

// Event Listener (2)

for (let i = 0; i < numberBoxesOne.length; i++) {
  numberBoxesOne[i].addEventListener('click', loopThroughTwo);
  numberBoxesOne[i].addEventListener('click', changeLayerTwo);
};

//Action (3): Second Number Loop

// Functionality: Loop Through (3)

function loopThroughThree() {

  const changeColorThree = () => this.classList.toggle('button-flash');

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorThree, i * 1000);
  };

};

// Functionality: Change Layer (3)

function changeLayerThree() {
  const swapThree = () => {
    stepThree.classList.add('hide');
    stepFour.classList.remove('hide');
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout(swapThree, Number(this.textContent) * 2 * 1000);
}

// Event Listener (3)

for (let i = 0; i < numberBoxesOne.length; i++) {
  numberBoxesTwo[i].addEventListener('click', loopThroughThree);
  numberBoxesTwo[i].addEventListener('click', changeLayerThree);
};

// Action (4): Reveal Fortune

const randomFortune = ['Prost', 'Servus', 'Schmarrn'];

function showFortune() {
  randomFortune.sort(function(a, b){return 0.5 - Math.random()});
  const randomFortuneParagraph = document.createElement('p');
  layerFour.appendChild(randomFortuneParagraph);
  const randomFortuneText = document.createTextNode(randomFortune[0]);
  randomFortuneParagraph.appendChild(randomFortuneText);
};

showFortune();
