// Countdown
const countdownDate = new Date("2026-03-07 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if(distance < 0){
    document.getElementById("countdown").innerText = "She's back! 🎉";
  }
}

const music = document.getElementById("bgMusic");

// Set volume to 50%
music.volume = 0.1;


setInterval(updateCountdown, 1000);
updateCountdown();

// Secret Message Button → goes to new page
document.getElementById("secretBtn").addEventListener("click", () => {
  window.location.href = "secret.html"; // Make sure this page exists
});

