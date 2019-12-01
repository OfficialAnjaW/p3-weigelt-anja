// Action 1: Loop Through & Layer Change

// Variables Layer 1

const layerOne = document.getElementById('layer-one');
const wordBoxes = document.getElementsByClassName('word-block');

// Variables Layer 2

const layerTwo = document.getElementById('layer-two');
const numberBoxes = document.getElementsByClassName('number-block')

// Functionality: Loop Through

function loopThrough() {

  const changeColor = () => this.classList.toggle('red-flash');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  };

};

// Functionality: Change Layer

function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
}

// Event Listener

for (let i = 0; i < wordBoxes.length; i++) {
  wordBoxes[i].addEventListener('click', loopThrough);
  wordBoxes[i].addEventListener('click', changeLayer);
};

// Action 2: Loop Through & Layer Change
