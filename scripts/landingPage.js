import { products as prods} from "./data/box.js";

let box1HTML='';
console.log(prods);

for(let i=0;i<4;i++){
   box1HTML+=`
   <div class="box-col">
      <h3>${prods[i].name}</h3>
      <img src=${prods[i].image} alt="">
      <a href="index.html">Shop More</a>
   </div>
   `;
}

let box2HTML='';
for(let i=4;i<8;i++){
   box2HTML+=`
   <div class="box-col">
      <h3>${prods[i].name}</h3>
      <img src=${prods[i].image} alt="">
      <a href="index.html">Shop More</a>
   </div>
   `;
}

document.querySelector('.js-box-row').innerHTML=box1HTML;
document.querySelector('.js-box-row-2').innerHTML=box2HTML;
