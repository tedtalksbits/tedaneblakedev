let left_card = document.getElementById('left_card');
let right_card = document.getElementById('right_card');

window.addEventListener('scroll', () => {
   let value = window.scrollY;


   left_card.style.left = value * .45 + 'px';

   console.log(value)
})