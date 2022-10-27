const  slide = document.querySelector('.main-container');
const contsld = document.querySelectorAll('.slide-container')
const next  = document.querySelector('#next')
const prev  = document.querySelector('#prev')
console.log(contsld);
let counter = 1;
const size = 1372;
slide.style.tranform = 'translateX(' + (-size*counter)+'px)';

next.addEventListener('click', function(){
    if(counter >= 6) return;

    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter++;
    console.log(counter);
    console.log(contsld.length );
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
  
  
})
prev.addEventListener('click', function(){
    if(counter <= 0) return;

    slide.style.transfogrm = 'transition 0.4s ese-in-out'
    counter--;
   
    slide.style.transform = 'translateX('+ (-size*counter)+'px)';
    console.log(counter);
    console.log( slide.style.transform )
 
})
slide.addEventListener('transitionend', function(){
    if (contsld[counter].id === 'last'){
        console.log(contsld[counter].id)
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
