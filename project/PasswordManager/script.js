document.getElementById("passform").addEventListener("submit", (event) => {
  event.preventDefault();
  const siteName = document.getElementById("siteName").value.trim();
  const userNmae = document.getElementById("userNmae").value.trim();
  const password = document.getElementById("password").value;

  const packet = {
    siteName: siteName,
    userNmae: userNmae,
    password: password,
  };
  saveToLocalStorage(packet);
  document.getElementById("siteName").value = "";
  document.getElementById("userNmae").value = "";
  document.getElementById("password").value = "";
});
document.getElementById("passform").addEventListener("reset", (event) => {
  event.preventDefault();
  document.getElementById("siteName").value = "";
  document.getElementById("userNmae").value = "";
  document.getElementById("password").value = "";
});

function saveToLocalStorage(packet) {
  const oldData = JSON.parse(localStorage.getItem("password")) || [];
  oldData.push(packet);
  const packetInString =JSON.stringify(oldData);
  localStorage.setItem("password",packetInString);
}
