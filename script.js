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