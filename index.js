function theClock() {
let c = document.querySelector(".clock");
let d = document.querySelector(".date")
setInterval(()=> {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let date = today.toDateString();

  c.innerText = `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
  d.innerText = date;
}, 1000);
function padding(n) {
  return n.toString().padStart(2, "0");
}
}

function certSlides() {
  let slideIndex = 0;
  showSlides();
    
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function certSlides2() {
  let slideIndex = 0;
  showSlides();
        
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function certSlides3() {
  let slideIndex = 0;
  showSlides();
            
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function portSlides(){
  let slideIndex = 0;
  showSlides();
          
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function USPS() {
  let slideIndex = 0;
  showSlides();
            
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("USPS");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}

function LOBBS() {
  let slideIndex = 0;
  showSlides();
              
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("LOBBS");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}

function CMI() {
  let slideIndex = 0;
  showSlides();
                
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("CMI");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}

function FSL() {
  let slideIndex = 0;
  showSlides();
                  
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("FSL");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}

function LOWES() {
  let slideIndex = 0;
  showSlides();
                    
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("LOWES");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}  

function THD() {
  let slideIndex = 0;
  showSlides();
                      
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("THD");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 0} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 20000); // Change image every 10 seconds
  }
}      
    