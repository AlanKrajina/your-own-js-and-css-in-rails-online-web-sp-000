function hideWhenClicked(){

  var x = document.getElementById("hide_this");

  x.addEventListener("click", function myFunction() {
      x.innerHTML = "";
  });

}
