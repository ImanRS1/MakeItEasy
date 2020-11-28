var scrolled = false;

window.onscroll = function() {
  scrolled = true;
  var windowHeight = window.innerHeight;
  if(window.scrollY > windowHeight){
    document.getElementsByClassName("navField")[0].style.background = "rgb(20, 97, 164)";
    document.getElementsByClassName("nav-burger")[0].style.color = "rgb(20, 97, 164)";
  }else{
    document.getElementsByClassName("navField")[0].style.background = "rgb(132, 196, 255)";
    document.getElementsByClassName("nav-burger")[0].style.color = "rgb(132, 196, 255)";
  }
}

setInterval(function(){
  if (scrolled) {
    scrolled = false;
  }
}, 150);


document.addEventListener("click", function(evt) {
      targetElement = evt.target;
      
      if(targetElement.classList.contains("navClick")){
        burgerClick();
      }else{
        document.getElementsByClassName("burger-menu")[0].style.display = "none";
      }
});



function burgerClick(){
  var burgerMenu = document.getElementsByClassName("burger-menu");

  if(burgerMenu[0].style.display == "block"){
    burgerMenu[0].style.display = "none";
  }else{
    
  burgerMenu[0].style.display = "block";
  }
}


startAutoSlide();
var myVar;

function startAutoSlide(){
  myVar = setInterval(function(){ plusSlides(1); }, 9000);
}

var bSlideIndex = 1;
bShowSlides(bSlideIndex);

function plusSlides(n){
  bShowSlides(bSlideIndex += n);
}
function currentSlide(n){
  bShowSlides(bSlideIndex = n);
}
function bShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("bSlideImages");
  if(n > slides.length){
    bSlideIndex = 1;
  }
  if(n < 1){
    bSlideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[bSlideIndex - 1].style.display = "block";
  document.getElementById("case-Background-Image").src = slides[bSlideIndex - 1].getElementsByTagName('img')[0].src;
}


/* window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      alert("you're at the bottom of the page");
  }
}; */