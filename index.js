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
        setTimeout(showSlides, 6000); // Change image every 6 seconds
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
            setTimeout(showSlides, 6000); // Change image every 6 seconds
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
                setTimeout(showSlides, 6000); // Change image every 6 seconds
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
              setTimeout(showSlides, 6000); // Change image every 6 seconds
          }
          }
    