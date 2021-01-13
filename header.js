const header = document.querySelector("header")
const pageYOffset = window.pageYOffset;

window.addEventListener("scroll", responsive);
function responsive(){
  console.log(window.pageYOffset);
  if(pageYOffset == 0){
    header.classList.add('new-header');
    header.classList.remove('js-header');
    
  } else{
    header.classList.remove('new-header');
    header.classList.add('js-header');
  }
}
  


