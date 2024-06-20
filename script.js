/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  
  var i = 0;
  document.getElementById('Nav_burger').addEventListener('click', function () {
    i++;
    var targetDiv = document.getElementById('target-div');
  
  
    if (i % 2 == 1) {
      targetDiv.style.height = '150px';
    }
    else {
      targetDiv.style.height = '55px';
    }
  });