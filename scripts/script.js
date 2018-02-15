var x = window.matchMedia("(min-width: 768px)");

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if (x.matches) { // If media query matches
      document.getElementById("main").style.marginLeft = "250px";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (x.matches) { // If media query matches
      document.getElementById("main").style.marginLeft = "0";
    }
}
