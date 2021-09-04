const clock = document.querySelector("h2#clock");
const time = document.querySelector(".time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (hours - 12 < 0 && hours - 12 >= -5) {
    time.innerText = "좋은 오전입니다.";
  } else if (hours - 12 >= 0 || hours - 12 <= 5) {
    time.innerText = "좋은 오후입니다.";
  } else if (hours - 12 >= 0 || hours - 12 <= 9) {
    time.innerText = "좋은 저녁입니다.";
  } else {
    time.innerText = "좋은 밤입니다.";
  }
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
