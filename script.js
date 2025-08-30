let nextProduct = document.getElementById('next-arrow');
let prevProduct = document.getElementById('prev-arrow');
let productCont = document.getElementById('product-container');

let translateX = 0;

nextProduct.addEventListener('click',()=>{
    if(translateX > -50){
    translateX -= 12.5;
    productCont.style.transform = `translateX(${translateX}%)`;
    }
})

prevProduct.addEventListener('click',()=>{
    if(translateX<0)
    translateX += 12.5;
    productCont.style.transform = `translateX(${translateX}%)`;
    
})

let testimonialCont = document.getElementById('testimonial-cont');
let nextReview = document.getElementById('testimonial-next-arrow');
let prevReview = document.getElementById('testimonial-prev-arrow');

let testimonialTransX = 0;

nextReview.addEventListener('click',()=>{
    if(testimonialTransX > -50){
    testimonialTransX -= 12.5;
    testimonialCont.style.transform = `translateX(${testimonialTransX}%)`;
    }
})

prevReview.addEventListener('click',()=>{
    if(testimonialTransX<0)
    testimonialTransX += 12.5;
    testimonialCont.style.transform = `translateX(${testimonialTransX}%)`;
    
})