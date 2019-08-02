const slides = document.querySelectorAll('#slides .slide');
const email = document.getElementById('email');
const menu = document.querySelector('.menu-btn');
const aside = document.querySelector('.main-menu');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

menu.addEventListener('click', () => {
  menu.classList.toggle('menu-btn_active');
  aside.classList.toggle('show_aside');
});

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

const form = document.querySelector('.support-body');
form.addEventListener('submit', event => {
  event.preventDefault()
  validate(event)
  form.reset();
})

const validate = () => {
  let isValid = true
  if(!email.value.match(/^\w{1,}@\w{1,}\.\w{2,}$/)) {
    email.classList.add("error");
    alert("Wrong mail!");
    isValid = false;
  }else{
    email.classList.remove("error");
}
console.log(isValid);
}
