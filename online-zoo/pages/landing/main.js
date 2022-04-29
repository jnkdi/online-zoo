const switcher = document.querySelector('.theme input');
const heroSlider = document.querySelector('.watch-your-animal-slider');
const heroCardsArr = document.querySelectorAll('.slider-card');
const heroCard = document.querySelector('.slider-card');
const rangeHero = document.querySelector('.hero-slider .input-range');
const heroCounter = document.querySelector('.hero-slider .is');
const pets = document.querySelector('.pets');
const petsArr = document.querySelectorAll('.pets-in-zoo-slider-card');
const petsCard = document.querySelector('.pets-in-zoo-slider-card');
const nextPets = document.querySelector('.pets-slider-next');
const prevPets = document.querySelector('.pets-slider-prev');
const rangePets = document.querySelector('.pets-in-zoo .input-range');
let petsCounter = document.querySelector('.pets-in-zoo .is');
let heroOffset = 0;
let heroi = 0;
let petsOffset = 0;
let petsi= 0;

function heroRange() {
  const heroCardWidth = window.getComputedStyle(heroCard).width;
  const cardWidth = Number(heroCardWidth.slice(0, heroCardWidth.length - 2));
  heroi= rangeHero.value - 1;
  if(heroi>= 0 && heroi< 8) { // for static first images + limit
    heroOffset = -(heroi - 1) * (cardWidth + 30);
    heroSlider.style.left = heroOffset + 'px';
  }
  heroCardsArr.forEach((e) => {
    e.classList.remove('slider-card-active');
  });
  heroCardsArr[heroi].classList.add('slider-card-active');
  heroCounter.innerHTML = '0' + (heroi+ 1) + '/';
}

function heroClick(event) {
  const heroCardWidth = window.getComputedStyle(heroCard).width;
  const cardWidth = Number(heroCardWidth.slice(0, heroCardWidth.length - 2));
  if(event.target.classList.contains('slider-card-active')) {
    return;
  }
  if(event.target.parentNode.classList.contains('slider-card')) {
    heroCardsArr.forEach((e) => {
      e.classList.remove('slider-card-active');
    });
    event.target.parentNode.classList.add('slider-card-active');
    heroi = Object.values(heroCardsArr).indexOf(event.target.parentNode);
    rangeHero.value = heroi + 1;
    heroCounter.innerHTML = '0' + (heroi+ 1) + '/';
    heroOffset = -(cardWidth + 30) * (heroi - 1);
    heroSlider.style.left = heroOffset + 'px';  
  }
}


function petsRange() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  petsi= rangePets.value - 1;
  if(petsi>= 3 && petsi< 8) { // for static first images + limit
    petsOffset = -(petsi- 3) * (cardWidth + 30);
    pets.style.left = petsOffset + 'px';
  }
  petsArr.forEach((e) => {
    e.classList.remove('pets-in-zoo-slider-active-card');
  });
  petsArr[petsi].classList.add('pets-in-zoo-slider-active-card');
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
}

function petsNext() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  petsi++;
  if(petsi> 3) { // for static first images
    petsOffset -= (cardWidth + 30); //img width
  }
  if(petsi> 7) {
    petsi= 0;
    petsOffset = 0;
  }
  pets.style.left = petsOffset + 'px';

  petsArr.forEach((e) => {
    e.classList.remove('pets-in-zoo-slider-active-card');
  });
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
  rangePets.value = petsi+ 1;
  petsArr[petsi].classList.add('pets-in-zoo-slider-active-card');
}

function petsPrev() {
  const petsCardWidth = window.getComputedStyle(petsCard).width;
  const cardWidth = Number(petsCardWidth.slice(0, petsCardWidth.length - 2));
  petsi--;
  if(petsi> 2) { // for static first images
    petsOffset += (cardWidth + 30); //img width
  }
  if(petsi< 0) {
    petsi= 7;
    petsOffset = -4 * (cardWidth + 30);
  }
  pets.style.left = petsOffset + 'px';

  petsArr.forEach((e) => {
    e.classList.remove('pets-in-zoo-slider-active-card');
  });
  petsCounter.innerHTML = '0' + (petsi+ 1) + '/';
  rangePets.value = petsi+ 1;
  petsArr[petsi].classList.add('pets-in-zoo-slider-active-card');
}

switcher.addEventListener('click', () => {
  if(document.documentElement.attributes.theme.value === 'light') {
    document.documentElement.attributes.theme.value = 'dark';
  } else {
    document.documentElement.attributes.theme.value = 'light';
  }
});

nextPets.addEventListener('click', petsNext);
prevPets.addEventListener('click', petsPrev);
rangePets.addEventListener('input', petsRange);
rangeHero.addEventListener('input', heroRange);
heroSlider.addEventListener('click', heroClick);
