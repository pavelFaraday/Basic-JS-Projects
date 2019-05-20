var nextBtn = document.querySelector('.nextBtn');
var prevBtn = document.querySelector('.prevBtn');
var container = document.querySelector('.images');

var counter = 0;

nextBtn.addEventListener('click',nextSlide);

prevBtn.addEventListener('click',prevSlide);

function nextSlide () {

     container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:700,fill:'forwards'});

    if(counter === 8) {
        counter = -1;
    }
    
    counter++;

    container.style.backgroundImage = `url(img/slider-${counter}.jpg`
 }


 function prevSlide () { 

    container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:700,fill:'forwards'});

    if(counter === 0) {
        counter = 9;
    }

    counter--;

    container.style.backgroundImage = `url(img/slider-${counter}.jpg`
 }







