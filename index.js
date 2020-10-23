const image = ['samsung-galaxy.jpg', 'black.jpeg'];
let img = null;

function init() {
  img = document.querySelector("#image");
  img.setAttribute('src', image[0]);
}

window.addEventListener('load', init);


let btn = document.querySelector("#black-button");
btn.addEventListener('click', toggleImage);
let btn1 = document.querySelector("#blue-button");
btn1.addEventListener('click', toggleImage);


function toggleImage(event){
  if(event.target.id=='black-button')
  {
    changeImage(1);
  }
  else{
    changeImage(0);
  }
}

function changeImage(imageNumber){
  img.setAttribute('src', image[imageNumber]);
}