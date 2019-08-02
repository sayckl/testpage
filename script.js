const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

const form = document.querySelector('.support-body');
form.addEventListener('submit', event => {
  event.preventDefault()
  const isValid = validate(event)
  console.log(isValid);
})

const validate = () => {
  let isValid = true
  if(!email.value.match(/^\w{1,}@\w{1,}\.\w{2,}$/)) {
    email.classList.add("error");
    isValid = false;
  }else{
    email.classList.remove("error");
}
}
