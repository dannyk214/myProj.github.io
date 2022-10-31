const  slide = document.querySelector('.main-container');
const contsld = document.querySelectorAll('.slide-container')
const next  = document.querySelector('#next')
const prev  = document.querySelector('#prev')
console.log(contsld);
let counter = 1;
const size = 1370;
slide.style.tranform = 'translateX(' + (-size*counter)+'px)';

next.addEventListener('click', function(){
    if(counter >= 4) return;
    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter++;
    console.log(counter);
  
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
  
  
})
prev.addEventListener('click', function(){
    if(counter <= 0) return;
    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter--;
  
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
     
})