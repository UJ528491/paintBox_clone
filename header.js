const header = document.querySelector("header")
const fade = header.querySelector(".new-header");



window.addEventListener("scroll", responsive);

function responsive(){
  const Yoffset = window.pageYOffset;
  if(Yoffset == 0){
    header.classList.add('js-header');
    header.classList.remove('fade-in');
    header.classList.remove('new-header');
    
  } else{
    header.classList.remove('js-header');
    header.classList.add('new-header');
    header.classList.add('fade-in');
  }
}
  


