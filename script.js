spans = document.querySelectorAll("span");

window.addEventListener("keydown", (event) => {
  if (event.key == "a" || event.key == "b" || event.key == "c") {
    document.getElementById("audioa").play();
  }
  if (event.key == "d" || event.key == "e" || event.key == "f") {
    document.getElementById("audiob").play();
  }
  if (event.key == "i" || event.key == "h" || event.key == "g") {
    document.getElementById("audioc").play();
  }
  if (event.key == "j" || event.key == "k" || event.key == "l") {
    document.getElementById("audiod").play();
  }
  if (event.key == "m" || event.key == "n" || event.key == "o") {
    document.getElementById("audioe").play();
  }
  if (event.key == "p" || event.key == "q" || event.key == "r") {
    document.getElementById("audiof").play();
  }
  if (event.key == "u" || event.key == "t" || event.key == "s") {
    document.getElementById("audiog").play();
  }
  if (event.key == "w" || event.key == "v" || event.key == "x") {
    document.getElementById("audioh").play();
  }
  if (event.key == "y" || event.key == "z") {
    document.getElementById("audioi").play();
  }
});
