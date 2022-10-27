const  slide = document.querySelector('.main-container');
const contsld = document.querySelectorAll('.slide-container')
const next  = document.querySelector('#next')
const prev  = document.querySelector('#prev')
console.log(contsld);
let counter = 1;
const size = 1372;
console.log(size);
slide.style.tranform = 'translateX(' + (-size*counter)+'px)';

next.addEventListener('click', function(){
   
    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter++;
   
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
    console.log(counter);
    console.log( slide.style.transform )
})
prev.addEventListener('click', function(){
   
    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter--;
   
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
    console.log(counter);
    console.log( slide.style.transform )
})
slide.addEventListener('transitioned', function(){
    if (contsld[counter].id === 'last'){
        slide.style.transition ='none';
        counter = contsld.length - 2;
        slide.style.transform ='translateX('+ (-size*counter)+'px)'
    
    }
    if (contsld[counter].id === 'first'){
        slide.style.transition ='none';
        counter = contsld.length - 2;
        slide.style.transform ='translateX('+ (-size*counter)+'px)'
    
    }
})
