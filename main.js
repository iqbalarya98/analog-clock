   //////////////////////////////////////
  // this code write by @iqbalarya_97 //
 //       free copyright code        //
//////////////////////////////////////

//day-dark mode
const msec = document.querySelector('.msec');
const toggle = document.querySelector('.toggle');
toggle.onclick = function() {
  msec.classList.toggle('light')
};


// analog clock
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

})

// digital clock
setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }

  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  let currentTime = hour + ":" +
    min + am_pm;
  document.getElementById("clock")
    .innerHTML = currentTime;
}
showTime();