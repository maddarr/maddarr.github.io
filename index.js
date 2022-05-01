

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

function Slides(choice) {
  let slideIndex = 0;
  showSlides();
    
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName(choice);
     for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 0} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function Slides1(choice){
  let slideIndex = 0;
  showSlides();
          
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName(choice);
     for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
}

function employmentChoice(choice) {
  var choiceId = document.getElementById(choice);
  if (choiceId.style.height === '2px') {
    choiceId.style.height = "1800px"
  } else {
    choiceId.style.height = '2px'
  };
}


