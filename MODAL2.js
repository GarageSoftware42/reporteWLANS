var modal = document.getElementById("myModal");
var btn = document.querySelector(".modal-btn"); 
var span = document.getElementById("closeBtn");


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
