function updateUTCTime() {
  document.getElementById("utc-time").textContent = new Date().toISOString();
}
updateUTCTime();
setInterval(updateUTCTime, 1000);
