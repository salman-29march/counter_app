
let curValue=0;
const mainTitle=document.querySelector('#title');
const btnDecrement=document.querySelector('#Decrement');
const btnReset=document.querySelector('#Reset');
const btnIncrement=document.querySelector('#Increment');

btnIncrement.addEventListener('click',()=>{
    curValue++;
    mainTitle.textContent=curValue
});

btnDecrement.addEventListener('click',()=>{
    curValue--;
    mainTitle.textContent=curValue
});
btnReset.addEventListener('click',()=>{
    curValue=0;
    mainTitle.textContent=curValue
});