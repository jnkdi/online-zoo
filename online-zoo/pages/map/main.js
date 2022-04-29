const switcher = document.querySelector('.theme input');
const container = document.querySelector('.slider-container');
const pets = document.querySelector('.pets');
const petsArr = document.querySelectorAll('.pets .gradient-block');
const petsCard = document.querySelector('.pets .gradient-block');
const nextPets = document.querySelector('.slider-arrow-right');
const prevPets = document.querySelector('.slider-arrow-left');
const rangePets = document.querySelector('.choose-your-favorite .input-range');
const map = document.querySelector('.map-map');
const pointerArr = document.querySelectorAll('.pointer');
const watchButton = document.querySelector('.watch-button');
let petsCounter = document.querySelector('.choose-your-favorite .is');
let petsOffset = 0;
let petsi= 3;

switcher.addEventListener('click', () => {
  if(document.documentElement.attributes.theme.value === 'light') {
    document.documentElement.attributes.theme.value = 'dark';
  } else {
    document.documentElement.attributes.theme.value = 'light';
  }
})

function petsRange() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const containerWidth = window.getComputedStyle(container).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  const sliderWidth = Number(containerWidth.slice(0, containerWidth.length -2));
  petsi = rangePets.value - 1;
  if((sliderWidth/cardWidth) <= 8) { // if we dont see all of cards
    if(petsi >= Math.floor(sliderWidth/cardWidth) && petsi < 8){
      petsOffset = -(petsi - Math.floor(sliderWidth/cardWidth)) * (cardWidth);
      pets.style.left = petsOffset + 'px';
    }
  }
  pointerArr.forEach((e) => {
    e.classList.remove('pointer-active');
  });
  if(pointerArr[petsi]) {
    pointerArr[petsi].classList.add('pointer-active');
  }
  petsArr.forEach((e) => {
    e.classList.remove('gradient-block-active');
  });
  petsArr[petsi].classList.add('gradient-block-active');
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
}

function petsNext() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const containerWidth = window.getComputedStyle(container).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  const sliderWidth = Number(containerWidth.slice(0, containerWidth.length -2));
  petsi++;
  if((sliderWidth/cardWidth) <= 8 && petsi > (sliderWidth/cardWidth)) { // for static first images
    petsOffset -= cardWidth; //img width
  }
  if(petsi> 7) {
    petsi= 0;
    petsOffset = 0;
  }
  pets.style.left = petsOffset + 'px';
  pointerArr.forEach((e) => {
    e.classList.remove('pointer-active');
  });
  if(pointerArr[petsi]) {
    pointerArr[petsi].classList.add('pointer-active');
  }
  petsArr.forEach((e) => {
    e.classList.remove('gradient-block-active');
  });
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
  rangePets.value = petsi+ 1;
  petsArr[petsi].classList.add('gradient-block-active');
}

function petsPrev() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const containerWidth = window.getComputedStyle(container).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  const sliderWidth = Number(containerWidth.slice(0, containerWidth.length -2));
  petsi--;
  if((sliderWidth/cardWidth) < 8 && petsi + 1 > (sliderWidth/cardWidth)) { // for static first images
    petsOffset += cardWidth; //img width
  }
  if(petsi< 0) {
    petsi= 7;
    petsOffset = 0;
    if((sliderWidth/cardWidth) < 6 ) {
      petsOffset = -2 * cardWidth;
    }
  }
  pets.style.left = petsOffset + 'px';
  pointerArr.forEach((e) => {
    e.classList.remove('pointer-active');
  });
  if(pointerArr[petsi]) {
    pointerArr[petsi].classList.add('pointer-active');
  }
  petsArr.forEach((e) => {
    e.classList.remove('gradient-block-active');
  });
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
  rangePets.value = petsi+ 1;
  petsArr[petsi].classList.add('gradient-block-active');
}

function petsClick(event) {
  if(event.target.parentNode.parentNode.classList.contains('gradient-block-active')) {
    return;
  }
  if(event.target.parentNode.parentNode.classList.contains('gradient-block')) {
    petsArr.forEach((e) => {
      e.classList.remove('gradient-block-active');
    });
    event.target.parentNode.parentNode.classList.add('gradient-block-active');
    petsi = Object.values(petsArr).indexOf(event.target.parentNode.parentNode);
    rangePets.value = petsi + 1;
    petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
    pointerArr.forEach((e) => {
      e.classList.remove('pointer-active');
    });
    if(pointerArr[petsi]) {
      pointerArr[petsi].classList.add('pointer-active');
    }
  }
}

function pointersClick(event) {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const containerWidth = window.getComputedStyle(container).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  const sliderWidth = Number(containerWidth.slice(0, containerWidth.length -2));
  if(event.target.classList.contains('pointer')) {
    pointerArr.forEach((e) => {
      e.classList.remove('pointer-active');
    });
    event.target.classList.add('pointer-active');
    petsi = Object.values(pointerArr).indexOf(event.target);
    rangePets.value = petsi + 1;
    if((sliderWidth/cardWidth) <= 8) { // if we dont see all of cards
      if(petsi >= Math.floor(sliderWidth/cardWidth) && petsi < 8){
        petsOffset = -(petsi - Math.floor(sliderWidth/cardWidth)) * (cardWidth);
        pets.style.left = petsOffset + 'px';
      }
    }
    petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
    petsArr.forEach((e) => {
      e.classList.remove('gradient-block-active');
    });
    if(petsArr[petsi]) {
      petsArr[petsi].classList.add('gradient-block-active');
    }
  }
}

function watch() {
  const active = document.querySelector('.gradient-block-active .animal-block');
  const link = active.dataset.link;
  watchButton.attributes.href.value = link;
}

nextPets.addEventListener('click', petsNext);
prevPets.addEventListener('click', petsPrev);
rangePets.addEventListener('input', petsRange);
pets.addEventListener('click', petsClick);
map.addEventListener('click', pointersClick);
watchButton.addEventListener('click', watch);