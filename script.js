var scrolled = false;

window.onscroll = function() {
  scrolled = true;
  var windowHeight = window.innerHeight - 10;

  if(window.scrollY > windowHeight){
    document.getElementsByClassName("navField")[0].style.background = "rgb(20, 97, 164)";
    document.getElementsByClassName("nav-burger")[0].style.color = "rgb(20, 97, 164)";
    document.getElementsByClassName("navIcon")[0].style.display = "block";
  }else{
    document.getElementsByClassName("navIcon")[0].style.display = "none";
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
      var navIcon = document.getElementsByClassName("nav-burger");
      
      if(targetElement.classList.contains("navClick")){
        burgerClick();
      }else{
        bmAnimation.classList.add("BM-animation-close");
        setTimeout(function(){ 
          document.getElementsByClassName("burger-menu")[0].style.display = "none";
          navIcon[0].innerHTML = "&#9776;"
         }, 1000);
        
      }
});

var bmAnimation = document.getElementById("burger-menu-animation"); 

function burgerClick(){
  var burgerMenu = document.getElementsByClassName("burger-menu");
  var navIcon = document.getElementsByClassName("nav-burger");

  if(burgerMenu[0].style.display == "block"){
    if(bmAnimation.classList.contains("BM-animation-open")){
      bmAnimation.classList.remove("BM-animation-open");
    }
    bmAnimation.classList.add("BM-animation-close");
    setTimeout(function(){ 
      burgerMenu[0].style.display = "none";
      navIcon[0].innerHTML = "&#9776;";
     }, 1000);
  }else{    
    burgerMenu[0].style.display = "block";
    navIcon[0].innerHTML = "&#10006;"
    if(bmAnimation.classList.contains("BM-animation-close")){
      bmAnimation.classList.remove("BM-animation-close");
    }
    bmAnimation.classList.add("BM-animation-open");
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

