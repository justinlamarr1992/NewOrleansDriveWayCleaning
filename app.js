// NavBar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });
  // anchor.addEventListener("onMouseOver", function (event) {
  //   popupbox.style.display = "block";
  // });

  span.addEventListener("click", function (event) {
    popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
      popupbox.style.display = "none";
    }
  });
}

// Team
function changeToDominic() {
  var dom = document.getElementById("team-pic-dom");
  var matt = document.getElementById("team-pic-matt");
  dom.classList.add("displayBlock");
  matt.classList.remove("displayBlock");
  dom.classList.remove("displayNone");
  matt.classList.add("displayNone");
  return false;
}
function changeToJen() {
  var dom = document.getElementById("team-pic-dom");
  var matt = document.getElementById("team-pic-matt");
  matt.classList.add("displayBlock");
  dom.classList.remove("displayBlock");
  matt.classList.remove("displayNone");
  dom.classList.add("displayNone");
  return false;
}
