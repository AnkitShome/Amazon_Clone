
let headerImagesHTML='';
for(let i=1;i<=7;i++){
   headerImagesHTML+=`<img src="images/header${i}.jpg" class="header-img">`
}
document.querySelector('.header-list').innerHTML=headerImagesHTML;





const images=document.querySelectorAll('.header-img');
const prev_btn=document.querySelector('.js-control-previous');
const next_btn=document.querySelector('.js-control-next');

let n=0;
function changeSlide(){
   images.forEach((image)=>{
      image.style.display='none';
   });
   
   images[n].style.display='block';
}

changeSlide();

prev_btn.addEventListener('click', (p)=>{
   if(n==0) n=images.length-1;
   else  n--;
   changeSlide();
})

next_btn.addEventListener('click', (p)=>{
   if(n==images.length-1)  n=0;
   else  n++;
   changeSlide();
})