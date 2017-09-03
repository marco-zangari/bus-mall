'use strict';

var shownImages = [];
var clickedImages = [];
var imageClicked = 0;
var maxClick = 25;
var imageChooserList = [];
var lastThree = [];
var currentThree = [];
var idArray = ['image-1', 'image-2', 'image-3'];
var imagePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/chair.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var bag = new ImageChooser('a bag','img/bag.jpg', 'bag');
var banana = new ImageChooser('a banana','img/banana.jpg', 'banana');
var bathroom = new ImageChooser('a bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new ImageChooser('the boots', 'img/boots.jpg', 'boots');
var breakfast = new ImageChooser('a breakfast', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new ImageChooser('the bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new ImageChooser('a chair', 'img/chair.jpg', 'chair');
var cthulhu = new ImageChooser('the cthulhu', 'img/cthulhu.jpg', 'cthulhu');
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
  return Math.floor(Math.random() * (imageChooserList.length));
};

function randomImageChooser (){
  currentThree = [];
  for (var i = 0; i < 3; i++) {
    var random = setRandom();
    if (currentThree.includes(random) || lastThree.includes(random)) {
      i--;
    } else {
      imageChooserList[random].filePath === imagePath[random];
      imageChooserList[random].numDisplayed === shownImages++;
      imageChooserList[random].numClicked === clickedImages++;
      currentThree.push(imagePath[random]);
    }
  }
  lastThree = currentThree;
};
randomImageChooser();

var productImage = document.getElementsByClassName('product-image');

function imageRender () {
  for (var i = 0; i < currentThree.length; i++) {
    var image1Spot = document.getElementById('image1');
    image1Spot.setAttribute('src', currentThree[0]);
    var image2Spot = document.getElementById('image2');
    image2Spot.setAttribute('src', currentThree[1]);
    var image3Spot = document.getElementById('image3');
    image3Spot.setAttribute('src', currentThree[2]);
  }
};
imageRender();

// productImage[i].setAttribute('src', imageChooserList[random].filePath);
//     shownImages.push(imageChooserList[random].filePath);
//     productImage[i].id = imageChooserList[random].id;
//     imageChooserList[random].numDisplayed++;

// var productArea = document.getElementById('product-area');
// productArea.addEventListener('click', onClickEvent);
var imageOne = document.getElementById('imageOne');
imageOne.addEventListener('click', onClickEvent);
var imageTwo = document.getElementById('imageTwo');
imageTwo.addEventListener('click', onClickEvent);
var imageThree = document.getElementById('imageThree');
imageThree.addEventListener('click', onClickEvent);

function onClickEvent(event) {
  for (var i = 0; i < imageChooserList.length; i++) {
    if (imageChooserList[i].id === event.target.id && imageClicked < maxClick) {
      imageChooserList[i].numClicked++;
      clickedImages.push(event.target.src);
      imageClicked++;
      renderThreeImages();
    } else if (imageClicked === maxClick) {
      imageOne.removeEventListener('click', this.onClickEvent);
      imageOne.innerHTML = ' ';
      imageTwo.removeEventListener('click', this.onClickEvent);
      imageTwo.innerHTML = ' ';
      imageThree.removeEventListener('click', this.onClickEvent);
      localStorage.setItem('clickedImages',JSON.stringify(clickedImages));
      localStorage.setItem('shownImages',JSON.stringify(shownImages));
    }
  }
};
function localStorageHas(name){
  if(localStorage.getItem('names')){
    return true;
  }else{
    return false;
  }
};

// get the list that will hold all the names
var list = document.getElementById('name-list');

// if I have something in localStorage with key of "names", do some stuff
if (localStorageHas('names')) {
  // take the value for "names" in localStorage and use JSON.parse to turn it into something else (like an array, or object, or whatever)
  for (var i = 0; i < nameArray.length; i++) {
    var li = document.createElement('li');
    li.innerText = nameArray[i];
    list.appendChild(li);
  }
  // if there is nothing in localStorage with key of "names", do something else
}

var form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', addNameToList);

function addNameToList(event){
  event.preventDefault();
  var theInput = form.elements.aField.value;
  var li = document.createElement('li');
  li.innerText = theInput;
  list.appendChild(li);

  nameArray.push(theInput);
  console.log(nameArray);
  localStorage.setItem('names', JSON.stringify(nameArray));
  form.reset();
}

    // var myChart = new Chart(ctx, chartConfig);
// clickCounter();

for (var i = 0; i < idArray.length; i++) {
  productImage[i].addEventListener('click', clickCounter);
}

// function stopThatImageNow (){

// stopThatImageNow();

// var chartConfig = {
//
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
//     datasets: [{ // <-- notice that this can be an array of multiple data sets.
//       // each data set is its own object literal.
//       label: '# of Votes', // <-- the label of this one data set
//       data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
//       backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 5 // border width in pixels
//     }]
//   },
//   options: {
//     // maintainAspectRatio: false,
//     // animation: {
//     //   duration: 1000
//     // },
//     title: {
//       display: true,
//       text: 'Some stuff and some junk'
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// };
