const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
  question.innerHTML = "I Like You too!";
  gif.src = "https://tandarandom24.files.wordpress.com/2019/10/tenor-2019-10-03t133740.793.gif";
});

noBtn.addEventListener('mouseover', () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
});
