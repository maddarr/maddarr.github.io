const emp = document.getElementById('emp');
const edu = document.getElementById('edu');
const port = document.getElementById('port');
const about = document.getElementById('about');

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