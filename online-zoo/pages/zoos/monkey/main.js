const switcher = document.querySelector('.theme input');

console.log(switcher);

switcher.addEventListener('click', () => {
  if(document.documentElement.attributes.theme.value === 'light') {
    document.documentElement.attributes.theme.value = 'dark';
  } else {
    document.documentElement.attributes.theme.value = 'light';
  }
  console.log(document.documentElement.attributes.theme.value);
})