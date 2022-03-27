function myFunctionMenu() {
    document.getElementById("myDropdown-menu").classList.toggle("show-menu");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-menu')) {
          openDropdown.classList.remove('show-menu');
        }
      }
    }
  }
  

  function myFunctionResume() {
    document.getElementById("myDropdown-resume").classList.toggle("show-resume");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-resume')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-resume");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-resume')) {
          openDropdown.classList.remove('show-resume');
        }
      }
    }
  }
  