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

// Action (1)

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

// Action (2)

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
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swapTwo, this.textContent.length * 2 * 1000);
}

// Event Listener (2)

for (let i = 0; i < numberBoxesOne.length; i++) {
  numberBoxesOne[i].addEventListener('click', loopThroughTwo);
  numberBoxesOne[i].addEventListener('click', changeLayerTwo);
};
