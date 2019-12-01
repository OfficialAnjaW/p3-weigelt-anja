// Action 1: Loop through the number of times the word is long

// Variables
const blueBoxes = document.getElementsByClassName('block-blue');
const whiteBoxes = document.getElementsByClassName('block-white');

//The Functionality (Blue Blocks)
function loopBlue() {

  const changeBlue = () => this.classList.toggle('red-flash');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeBlue, i * 1000);
  };

};

//The Event Listener (Blue Blocks)
for (let i = 0; i < blueBoxes.length; i++) {
  blueBoxes[i].addEventListener('click', loopBlue);
};

//The Functionality (White Blocks)
function loopWhite() {

  const changeWhite = () => this.classList.toggle('red-flash');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeWhite, i * 1000);
  };

};

//The Event Listener (White Blocks)
for (let i = 0; i < whiteBoxes.length; i++) {
  whiteBoxes[i].addEventListener('click', loopWhite);
};
