var input = document.getElementById("inputvalue");
var add = document.getElementById("add");
var ullist = document.getElementById("ullist");
add.addEventListener("click", () => {
  if (input.value) {
    var list = document.createElement("li");
    ullist.appendChild(list).textContent = input.value;
    input.value = "";
  }
});
var clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  ullist.style.display = "none";
});
