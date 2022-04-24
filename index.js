

function theClock() {
let c = document.querySelector(".clock");
let d = document.querySelector(".date")
setInterval(()=> {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let date = today.toDateString();

  c.innerText = `${padding(hh)} : ${padding(mm)}`;
  d.innerText = date;
}, 1000);
function padding(n) {
  return n.toString().padStart(2, "0");
}
}

function theButtons() {
  $(document).ready(function () {
    ($(".btn").click(function () {
        $("#" + this.id).prop('disabled', true);
        $(".btn").not(this).prop('disabled', false);
    }));
});
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
  let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function E1() {
  var B1 = document.getElementById("E1");
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
function E2() {
  var B1 = document.getElementById("E2")
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
function E3() {
  var B1 = document.getElementById("E3")
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
function E4() {
  var B1 = document.getElementById("E4")
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
function E5() {
  var B1 = document.getElementById("E5")
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
function E6() {
  var B1 = document.getElementById("E6")
  if (B1.style.height === "2px") {
  B1.style.height = "1800px";
  } else {
    B1.style.height = "2px";
  };
}
   