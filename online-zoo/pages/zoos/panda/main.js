const switcher = document.querySelector('.theme input');
const videoSlider = document.querySelector('.video-slider');
const mainVideo = document.querySelector('.main-video');
const mainImage = document.querySelector('.main-image');

console.log(switcher);

switcher.addEventListener('click', () => {
  if(document.documentElement.attributes.theme.value === 'light') {
    document.documentElement.attributes.theme.value = 'dark';
  } else {
    document.documentElement.attributes.theme.value = 'light';
  }
  console.log(document.documentElement.attributes.theme.value);
});

videoSlider.addEventListener('click', (e) => {
  const cardImage = e.target;
  const cardVideo = e.target.nextElementSibling;
  const newImgSrc = e.target.attributes.src.value;
  const newVideoSrc = cardVideo.attributes.src.value;

  cardImage.attributes.src.value = mainImage.attributes.src.value;
  mainImage.attributes.src.value = newImgSrc;

  cardVideo.attributes.src.value = mainVideo.attributes.src.value;
  mainVideo.attributes.src.value = newVideoSrc;
})

