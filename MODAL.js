
     var modal = document.getElementById("modal");
     var modalImg = document.getElementById("modal-img");
     var captionText = document.getElementById("caption");

     var imgs = document.querySelectorAll(".producto img");
     imgs.forEach(function(img) {
         img.onclick = function() {
             modal.style.display = "block";
             modalImg.src = this.src; 
             captionText.innerHTML = this.alt;
         }
     });


     var span = document.getElementsByClassName("close")[0];
     span.onclick = function() { 
         modal.style.display = "none";
     }