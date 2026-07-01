const slider = document.getElementById('movingSlider');
const leftbutton = document.querySelector('.leftbutton');
const rigthbutton = document.querySelector('.rigthbutton');

leftbutton.addEventListener('click',() => {
  slider.scrollBy({left: -300 , behavior: 'smooth'});
});

rigthbutton.addEventListener('click',() => {
  slider.scrollBy({left: 300 , behavior: 'smooth'});
});
