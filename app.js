'use strict';
var pageClicked = 0;
var maxClick = 3;
var imageChooserList = [];
var lastThree = [];
var currentThree = [];
var idArray = ['imageOne', 'imageTwo', 'imageThree'];
var imagePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/chair.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var bag = new ImageChooser('a bag','img/bag.jpg', 'bag');
var banana = new ImageChooser('a banana','img/banana.jpg', 'banana');
var bathroom = new ImageChooser('a bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new ImageChooser('the boots', 'img/boots.jpg', 'boots');
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

if (localStorage.getItem('clicks')){
  var countedClicks = JSON.parse(localStorage.getItem('clicks'));
}

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

var productImage = document.getElementsByClassName('product-image');

function renderThreeImages(){
  var random = setRandom();
  currentThree = [];
  for (var i = 0; i < idArray.length; i++) {
    while (currentThree.includes(random) || lastThree.includes(random)) {
      random = setRandom();
    }
    productImage[i].setAttribute('src', imageChooserList[random].filePath);
    currentThree.push(random);
    }
  lastThree = currentThree;

  for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
  }
};
renderThreeImages();

function onClickEvent(event) {
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var userChoice = imageChooserList[itemIdx];
  userChoice.pageClicked++;
  event.preventDefault();
  renderThreeImages();
  maxClick++;

  if (pageClicked === maxClick) {
      for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {

        document.getElementsByClassName('clickable').lei]
      }

    //   var index = lastThree[0];
    //   imageChooserList[index].numClicked++;
    // } else if(event.target.id === 'image-two') {
    //   var index = lastThree[1];
    //   imageChooserList[index].numClicked++;
    // } else {
    //   var index = lastThree[2];
    //   imageChooserList[index].numClicked++;
    // }
    //   pageClicked++;
    // } else {

    var myChart = new Chart(ctx, chartConfig);
    }
};
// clickCounter();

for (var i = 0; i < idArray.length; i++) {
  productImage[i].addEventListener('click', clickCounter);
}

// function stopThatImageNow (){

// stopThatImageNow();


var chartConfig = {

  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
    datasets: [{ // <-- notice that this can be an array of multiple data sets.
      // each data set is its own object literal.
      label: '# of Votes', // <-- the label of this one data set
      data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
      backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 5 // border width in pixels
    }]
  },
  options: {
    // maintainAspectRatio: false,
    // animation: {
    //   duration: 1000
    // },
    title: {
      display: true,
      text: 'Some stuff and some junk'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};
