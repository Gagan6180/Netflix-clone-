let index = 0;
const slider = document.querySelector('.slider');
const cardWidth = 172; // card width + gap

document.querySelector('.arrow.right').addEventListener('click', () => {
  index++;
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
});