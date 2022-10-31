const  slide = document.querySelector('.main-container');
const contsld = document.querySelectorAll('.slide-container')
const next  = document.querySelector('#next')
const prev  = document.querySelector('#prev')
const input = document.querySelectorAll('input');

let counter = 1;
const size = 1370;
slide.style.tranform = 'translateX(' + (-size*counter)+'px)';
console.log(input);
console.log(input[5].value)
let i =0;
let total = 0;
next.addEventListener('click', function(){
    if(counter >= 4) return;
    slide.style.transform = 'transition 1.4s ese-in-out'
    counter++;
    console.log(counter);
  
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
    for(i = 0; i < input.length; i ++){
  if(input[i].checked == true){
   total += 1;
   console.log(total)
  }
    }
  
})

prev.addEventListener('click', function(){
    if(counter <= 0) return;
    slide.style.transform = 'transition 0.4s ese-in-out'
    counter--;
  
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
     
})
console.log(total)
