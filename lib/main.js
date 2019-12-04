'use strict';

// Global Variables

// Variables Layer 1

var layerOne = document.getElementById('layer-one');
var wordBoxes = document.getElementsByClassName('word-block');

// Variables Layer 2

var layerTwo = document.getElementById('layer-two');
var numberBoxesOne = document.getElementsByClassName('number-block-one');

// Variables Layer 3

var layerThree = document.getElementById('layer-three');
var numberBoxesTwo = document.getElementsByClassName('number-block-two');

// Variables Layer 4

var layerFour = document.getElementById('layer-four');

// Variables Steps (Paragraphs)

var stepOne = document.getElementById('step-one');
var stepTwo = document.getElementById('step-two');
var stepThree = document.getElementById('step-three');
var stepFour = document.getElementById('step-four');

// Action (1): Word Loop

// Functionality: Loop Through (1)

function loopThroughOne() {
  var _this = this;

  var changeColorOne = function changeColorOne() {
    return _this.classList.toggle('button-flash');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColorOne, i * 1000);
  };
};

// Functionality: Change Layer (1)

function changeLayerOne() {
  var swapOne = function swapOne() {
    stepOne.classList.add('hide');
    stepTwo.classList.remove('hide');
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swapOne, this.textContent.length * 2 * 1000);
}

// Event Listener (1)

for (var i = 0; i < wordBoxes.length; i++) {
  wordBoxes[i].addEventListener('click', loopThroughOne);
  wordBoxes[i].addEventListener('click', changeLayerOne);
};

// Action (2): First Number Loop

// Functionality: Loop Through (2)

function loopThroughTwo() {
  var _this2 = this;

  var changeColorTwo = function changeColorTwo() {
    return _this2.classList.toggle('button-flash');
  };

  for (var _i = 0; _i < Number(this.textContent) * 2; _i++) {
    setTimeout(changeColorTwo, _i * 1000);
  };
};

// Functionality: Change Layer (2)

function changeLayerTwo() {
  var swapTwo = function swapTwo() {
    stepTwo.classList.add('hide');
    stepThree.classList.remove('hide');
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swapTwo, Number(this.textContent) * 2 * 1000);
}

// Event Listener (2)

for (var _i2 = 0; _i2 < numberBoxesOne.length; _i2++) {
  numberBoxesOne[_i2].addEventListener('click', loopThroughTwo);
  numberBoxesOne[_i2].addEventListener('click', changeLayerTwo);
};

//Action (3): Second Number Loop

// Functionality: Loop Through (3)

function loopThroughThree() {
  var _this3 = this;

  var changeColorThree = function changeColorThree() {
    return _this3.classList.toggle('button-flash');
  };

  for (var _i3 = 0; _i3 < Number(this.textContent) * 2; _i3++) {
    setTimeout(changeColorThree, _i3 * 1000);
  };
};

// Functionality: Change Layer (3)

function changeLayerThree() {
  var swapThree = function swapThree() {
    stepThree.classList.add('hide');
    stepFour.classList.remove('hide');
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swapThree, Number(this.textContent) * 2 * 1000);
}

// Event Listener (3)

for (var _i4 = 0; _i4 < numberBoxesOne.length; _i4++) {
  numberBoxesTwo[_i4].addEventListener('click', loopThroughThree);
  numberBoxesTwo[_i4].addEventListener('click', changeLayerThree);
};

// Action (4): Reveal Fortune

var randomFortune = ['Prost', 'Servus', 'Schmarrn'];

var showFortune = function showFortune() {
  randomFortune.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  var randomFortuneParagraph = document.createElement('p');
  layerFour.appendChild(randomFortuneParagraph);
  var randomFortuneText = document.createTextNode(randomFortune[0]);
  randomFortuneParagraph.appendChild(randomFortuneText);
};

showFortune();