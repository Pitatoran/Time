const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var primary = new Array();
primary[0] = "#d4f16b";
primary[1] = "#9bbcb8";
primary[2] = "#f4ae0a";
primary[3] = "#d0590b";
primary[4] = "#38914f";
primary[5] = "#61dcc5";
primary[6] = "#08f85e";
primary[7] = "#4b3341";
primary[8] = "#f8fecd";
primary[9] = "#55406b";
primary[10] = "#58f650";
primary[11] = "#3ad59a";
primary[12] = "#c3f27f";
primary[13] = "#04030e";
primary[14] = "#71cc33";
primary[15] = "#031ed6";

var secondary = new Array();
secondary[0] = "#8f27db";
secondary[1] = "#0f32b9";
secondary[2] = "#5c0d0b";
secondary[3] = "#0a1116";
secondary[4] = "#07151c";
secondary[5] = "#3a04bd";
secondary[6] = "#95424b";
secondary[7] = "#b3da75";
secondary[8] = "#d103a1";
secondary[9] = "#f3e80a";
secondary[10] = "#a71144";
secondary[11] = "#830d46";
secondary[12] = "#4607e3";
secondary[13] = "#e71167";
secondary[14] = "#0b4119";
secondary[15] = "#bfffeb";

var h_dn = GetElementInsideContainer("counter", "h");
var m_dn = GetElementInsideContainer("counter", "m");
var s_dn = GetElementInsideContainer("counter", "s");

function GetElementInsideContainer(containerID, childID) {
    var elm = {};
    var elms = document.getElementById(containerID).getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++)
    {
        if (elms[i].id === childID)
        {
            elm = elms[i];
            break;
        }
    }
    return elm;
}

function showquote(){

    var clockCircle = document.getElementsByClassName("circle");
    var clockCenter = document.getElementsByClassName("mid-circle");
    var clockMark = document.getElementsByClassName("hour-marks");
    var clockHrArm = document.getElementsByClassName("hour-arm");
    var clockMinArm = document.getElementsByClassName("minute-arm");
    var clockSecArm = document.getElementsByClassName("second-arm");
    var counter = document.getElementById("counter");
    var timerInput = document.getElementById("timer-input");
    var information = document.getElementById("information");

    var q = primary.length;
    var rand = Math.round(Math.random()*(q-1));

    document.body.style.backgroundColor = primary[rand];
    clockCircle[0].style.stroke = secondary[rand];
    clockCenter[0].style.stroke = secondary[rand];
    clockCenter[0].style.fill = secondary[rand];
    clockMark[0].style.stroke = secondary[rand];
    clockHrArm[0].style.stroke = secondary[rand];
    clockMinArm[0].style.stroke = secondary[rand];
    clockSecArm[0].style.stroke = secondary[rand];
    counter.style.color = secondary[rand];
    timerInput.style.color = secondary[rand];
    information.style.color = secondary[rand];
}

showquote();

/* Random Time */
let hr_position = 20;
let min_position = 130;
let sec_position = 267;

function run_the_clock() { // Uses .setInterval();


  /* Current Time */
  var date = new Date();
  // console.log(date);

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hr_deg = (hr * 360/12) + ((min * 360/60) / 12);
  let min_deg = (min * 360/60) + ((sec * 360/60) / 60);
  let sec_deg = sec * 360/60;

  HOURHAND.style.transform = "rotate(" + hr_deg + "deg)";
  MINUTEHAND.style.transform = "rotate(" + min_deg + "deg)";
  SECONDHAND.style.transform = "rotate(" + sec_deg + "deg)";
}
var interval = setInterval(run_the_clock, 1000);

function start() {
    var x = document.getElementById("timer-input");

    var hr = parseInt(x.elements[0].value);
    var min = parseInt(x.elements[1].value);
    var sec = parseInt(x.elements[2].value);

    if (hr < 0 || hr > 23 ||
        min < 0 || min > 60 ||
        sec < 0 || sec > 60) {
      document.getElementById("timer-display").innerHTML = "Enter Valid Number From 0 - 60";
    } else {

    // THIS COUNTS DOWN
    setInterval ( function() {
        if(hr == 0 &&
           min == 0 &&
           sec == 0) {
             h_dn.innerHTML = 0;
             m_dn.innerHTML = 0;
             s_dn.innerHTML = 0;
             clearInterval();
           }
        if (parseInt(sec) > 0) {

          h_dn.innerHTML = parseInt(hr);
          m_dn.innerHTML = parseInt(min);
          s_dn.innerHTML = parseInt(sec);
          sec--;

        } else {
            sec = 59;

            if (parseInt(min) > 0) {
              m_dn.innerHTML = parseInt(min);
              min--;

            } else {
                min = 59;

                if (parseInt(hr) > 0) {
                  h_dn.innerHTML = parseInt(hr);
                  hr--;

                } else {
                      hr = 00;
                      min = sec = 00;
                }
             };
        }
      }, 1000);
    }
}

function defaultSettting() {

  var clockCircle = document.getElementsByClassName("circle");
  var clockCenter = document.getElementsByClassName("mid-circle");
  var clockMark = document.getElementsByClassName("hour-marks");
  var clockHrArm = document.getElementsByClassName("hour-arm");
  var clockMinArm = document.getElementsByClassName("minute-arm");
  var clockSecArm = document.getElementsByClassName("second-arm");
  var counter = document.getElementById("counter");
  var timerInput = document.getElementById("timer-input");
  var information = document.getElementById("information");

  document.body.style.backgroundColor = "white";
  clockCircle[0].style.stroke = "black";
  clockCenter[0].style.stroke = "black";
  clockCenter[0].style.fill = "black";
  clockMark[0].style.stroke = "black";
  clockHrArm[0].style.stroke = "black";
  clockMinArm[0].style.stroke = "black";
  clockSecArm[0].style.stroke = "black";
  counter.style.color = "black";
  timerInput.style.color = "black";
  information.style.color = "black";
}
