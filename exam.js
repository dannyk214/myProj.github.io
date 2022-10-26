const  slide = document.querySelector('.slide-container');
const contsld = document.querySelectorAll('.slide-container div')
const next  = document.querySelector('#next')
const prev  = document.querySelector('#prev')
console.log(contsld);
let counter = 1;
const size = 500;
console.log(size);
slide.style.tranform = 'translateX(' + (-size*counter)+'px)';

next.addEventListener('click', function(){
    slide.style.transform = 'transition 0.4s ese-in-out'
    counter++;
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
    console.log(counter);
    console.log( slide.style.transform )
})
