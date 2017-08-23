'use strict';

var imageChooserList = [];
var lastThree = [];
var currentThree = [];
var idArray = ['imageOne', 'imageTwo', 'imageThree'];
var imagePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/chair.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var bag = new ImageChooser('a bag','img/bag.jpg', 'bag');
var banana = new ImageChooser('a banana','img/banana.jpg', 'banana');
var bathroom = new ImageChooser('a bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new ImageChooser('the boots', 'img/boots.png', 'boots');
var breakfast = new ImageChooser('a breakfast', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new ImageChooser('the bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new ImageChooser('a chair', 'img/chair.jpg', 'chair');
var cthulhu = new ImageChooser('the cthulhu', 'img/chair.jpg', 'cthulhu');
var dogDuck = new ImageChooser('a dog duck', 'img/dog-duck.jpg', 'dogDuck');
var dragon = new ImageChooser('a dragon', 'img/dragon.jpg', 'dragon');
var pen = new ImageChooser('a pen', 'img/pen.jpg', 'pen');
var petSweep = new ImageChooser('a pet sweep', 'img/pet-sweep.jpg', 'petSweep');
var scissors = new ImageChooser('the scissors', 'img/scissors.jpg', 'scissors');
var shark = new ImageChooser('a shark', 'img/shark.jpg', 'shark');
var sweep = new ImageChooser('the sweep', 'img/sweep.png', 'sweep');
var tauntaun = new ImageChooser('a tauntaun', 'img/tauntaun.jpg', 'tauntaun');
var unicorn = new ImageChooser('the unicorn', 'img/unicorn.jpg', 'unicorn');
var usb = new ImageChooser('the usb', 'img/usb.gif', 'usb');
var waterCan = new ImageChooser('a water can', 'img/water-can.jpg', 'waterCan');
var wineGlass = new ImageChooser('a wine glass', 'img/wine-glass.jpg', 'wineGlass');

function ImageChooser (name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.numDisplayed = 0;
  this.numClicked = 0;
  imageChooserList.push(this);
};

function setRandom () {
  return Math.floor(Math.random() * imageChooserList.length);
};

// var renderOneImage = function () {
//   var random = setRandom();
//   var imagePutter = document.getElementById('imageOne');
//   imagePutter.innerHTML = ' ';
//   var imageOne = document.createElement('img');
//   imagePutter.appendChild(imageOne);
//   imageOne.setAttribute('src', imagePath[random]);
//   while (lastThreeArray.includes(imageOne)){
//     imageOne.setAttribute('src', imagePath[random]);
//   }
// };
//
// var renderTwoImages = function () {
//   var random = setRandom();
//   var imagePutter = document.getElementById('imageTwo');
//   imagePutter.innerHTML = ' ';
//   var imageTwo = document.createElement('img');
//   imagePutter.appendChild(imageTwo);
//   imageTwo.setAttribute('src', imagePath[random]);
//
//   // while (imageOne === imageTwo || lastThreeArray.includes(imageTwo)) {
//   //   imageTwo.setAttribute('src', imagePath[random]);
//   // }
// };
//
// var renderThreeImages = function () {
//   var random = setRandom();
//   var imagePutter = document.getElementById('imageThree');
//   imagePutter.innerHTML = ' ';
//   var imageThree = document.createElement('img');
//   imagePutter.appendChild(imageThree);
//   imageThree.setAttribute('src', imagePath[random]);
  // while (imageThree === imageTwo || lastThreeArray.includes(imageThree)) {
  //   imageThree.setAttribute('src', imagePath[random]);
  // }
// };

function renderThreeImages () {
  var random = setRandom();
  for (var i = 0; i < idArray.length; i++) {
    while (currentThree.includes(imagePath[random]) || lastThree.includes(imagePath[random])) {
      random = setRandom();
    }
    var imagePutter = document.getElementById(idArray[i]);
    var image = document.createElement('img');
    image.setAttribute('src', imagePath[random]);
    imagePutter.appendChild(image);
    currentThree.push(imagePath[random]);
  }
  lastThree = currentThree;
};

// var lastThree = [imageOne, imageTwo, imageThree];

renderThreeImages();
