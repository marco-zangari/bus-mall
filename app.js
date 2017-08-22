'use strict';

var items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'chthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];

function ImageChooser (name, filePath, numDisplayed, numClicked, textString) {
    this.name = name;
    this.filePath = filePath;
    this.numDisplayed = numDisplayed;
    this.numClicked = numClicked;
    this.textString = textString;

    items.push(this);

    this.setRandom = function () {
        return Math.floor(Math.random() * items.length - 1);
      };

  this.renderOneImage = function () {
      var imagePutter = document.getElementById('imageOne')
      var imageOne = document.createElement('img');
      imageOne.setAttribute('src', this.filepath);
      imagePutter.appendChild(imageOne);
    };
};


var bag = new ImageChooser('bag','/Users/marcozangari/codefellows/201/bus-mall/img/bag.jpg', 0,0);
var banana = new ImageChooser('banana','img/banana.jpg', 0, 0);
var bathroom = new ImageChooser('bathroom', 'img/bathroom.jpg', 0, 0);
var boots = new ImageChooser('boots', 'img/boots.png', 0, 0);
var breakfast = new ImageChooser('breakfast', 'img/breakfast.jpg', 0, 0);
var bubblegum = new ImageChooser('bubblegum', 'img/bubblegum.jpg', 0, 0);
var chair = new ImageChooser('chair', 'img/chair.jpg', 0, 0);
var cthulhu = new ImageChooser('cthulhu', 'img/chair.jpg', 0, 0);
var dogDuck = new ImageChooser('dogDuck', 'img/dog-duck.jpg', 0, 0);
var dragon = new ImageChooser('dragon', 'img/dragon.jpg', 0, 0);
var pen = new ImageChooser('pen', 'img/pen.jpg', 0, 0);
var petSweep = new ImageChooser('petSweep', 'img/pet-sweep.jpg', 0, 0);
var scissors = new ImageChooser('scissors', 'img/scissors.jpg', 0, 0);
var shark = new ImageChooser('shark', 'img/shark.jpg', 0, 0);
var sweep = new ImageChooser('sweep', 'img/sweep.png', 0, 0);
var tauntaun = new ImageChooser('tauntaun', 'img/tauntaun.jpg', 0, 0);
var unicorn = new ImageChooser('unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new ImageChooser('usb', 'img/usb.gif', 0, 0);
var waterCan = new ImageChooser('waterCan', 'img/water-can.jpg', 0, 0);
var wineGlass = new ImageChooser('wineGlass', 'img/wine-glass.jpg', 0, 0);

bag.renderOneImage();
