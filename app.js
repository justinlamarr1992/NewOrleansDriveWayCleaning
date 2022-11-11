// NavBar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

// Modal
var dataMap = new Map([
  [
    document.getElementById("aboutModalButton"),
    document.getElementById("aboutModal"),
  ],
  [
    document.getElementById("galleryModalButton"),
    document.getElementById("galleryModal"),
  ],
  [document.getElementById("cake1"), document.getElementById("cakeModal1")],
  [document.getElementById("cake2"), document.getElementById("cakeModal2")],
  [document.getElementById("cake3"), document.getElementById("cakeModal3")],
  [document.getElementById("cake4"), document.getElementById("cakeModal4")],
  [document.getElementById("cake5"), document.getElementById("cakeModal5")],
  [document.getElementById("cake6"), document.getElementById("cakeModal6")],
  [document.getElementById("cake7"), document.getElementById("cakeModal7")],
  [document.getElementById("cake8"), document.getElementById("cakeModal8")],
  [document.getElementById("cake9"), document.getElementById("cakeModal9")],
  [document.getElementById("cake10"), document.getElementById("cakeModal10")],
  [document.getElementById("cake11"), document.getElementById("cakeModal11")],
  [document.getElementById("cake12"), document.getElementById("cakeModal12")],
  [document.getElementById("cake13"), document.getElementById("cakeModal13")],
  [document.getElementById("cake14"), document.getElementById("cakeModal14")],
  [document.getElementById("cake15"), document.getElementById("cakeModal15")],
  [document.getElementById("cake16"), document.getElementById("cakeModal16")],
  [document.getElementById("cake17"), document.getElementById("cakeModal17")],
  [document.getElementById("cake18"), document.getElementById("cakeModal18")],
  [document.getElementById("cake19"), document.getElementById("cakeModal19")],
  [document.getElementById("cake20"), document.getElementById("cakeModal20")],
  [document.getElementById("cake21"), document.getElementById("cakeModal21")],
  [document.getElementById("cake22"), document.getElementById("cakeModal22")],
  [document.getElementById("cake23"), document.getElementById("cakeModal23")],
  [document.getElementById("cake24"), document.getElementById("cakeModal24")],
  [document.getElementById("cake25"), document.getElementById("cakeModal25")],
  [document.getElementById("cake26"), document.getElementById("cakeModal26")],
]);

dataMap.forEach((value, key) => {
  doModal(key, value);
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
function galleryModal() {
  // Gallery
  var previous = document.getElementById("btnPrev");
  var next = document.getElementById("btnNext");
  var gallery = document.getElementById("image-gallery");
  var pageIndicator = document.getElementById("page");
  var galleryDots = document.getElementById("gallery-dots");

  var images = [];
  for (var i = 0; i < 19; i++) {
    images.push({
      title: "Image " + (i + 1),
      source: "./images/CakeBalls/Image" + i + ".jpeg",
    });
  }

  var perPage = 8;
  var page = 1;
  var pages = Math.ceil(images.length / perPage);

  // Gallery Dots
  for (var i = 0; i < pages; i++) {
    var dot = document.createElement("button");
    var dotSpan = document.createElement("span");
    var dotNumber = (document = document.createTextNode(i + 1));
    dot.classList.add("gallery-dot");
    dot.setAttribute("data-index", i);
    dotSpan.classList.add("sr-only");

    dotSpan.appendChild(dotNumber);
    dot.appendChild(dotSpan);

    dot.addEventListener("click", function (e) {
      var self = e.target;
      goToPage(self.getAttribute("data-index"));
    });
    galleryDots.appendChild(dot);
  }
  // Prev Button
  previous.addEventListener("click", function () {
    if (page === 1) {
      page = 1;
    } else {
      page--;
      showImages();
    }
  });
  // Next Button
  next.addEventListener("click", function () {
    if (page < pages) {
      page++;
      showImages();
    }
  });
  // Jump to page
  function goToPage(index) {
    index = parseInt(index);
    page = index + 1;
    showImages();
  }
  // Load images
  function showImages() {
    while (gallery.firstChild) gallery.removeChild(gallery.firstChild);
    var offset = (page - 1) * perPage;
    var dots = document.querySelectorAll(".gallery-dot");
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[page - 1].classList.add("active");
    for (var i = offset; i < offset + perPage; i++) {
      if (images[i]) {
        var template = document.createElement("div");
        var title = document.createElement("p");
        var titleText = document.createTextNode(images[i].title);
        var img = document.createElement("img");
        template.classList.add("template");

        img.setAttribute("src", images[i].source);
        img.setAttribute("alt", images[i].title);
        title.appendChild(titleText);
        template.appendChild(img);
        // template.appendChild(title);
        gallery.appendChild(template);
      }
    }
    // animate images
    var galleryItems = document.querySelectorAll(".template");
    for (var i = 0; i < galleryItems.length; i++) {
      var onAnimateItemIn = animateItemIn(i);
      setTimeout(onAnimateItemIn, i * 100);
    }
    function animateItemIn(i) {
      var item = galleryItems[i];
      return function () {
        item.classList.add("animate");
      };
    }
    // Update page Indicator
    pageIndicator.textContent = "Page " + page + " of " + pages;
  }
  showImages();
}

// Team
function changeToChris() {
  var chris = document.getElementById("team-pic-chris");
  var jen = document.getElementById("team-pic-jen");
  chris.classList.add("displayBlock");
  jen.classList.remove("displayBlock");
  chris.classList.remove("displayNone");
  jen.classList.add("displayNone");
  return false;
}
function changeToJen() {
  var chris = document.getElementById("team-pic-chris");
  var jen = document.getElementById("team-pic-jen");
  jen.classList.add("displayBlock");
  chris.classList.remove("displayBlock");
  jen.classList.remove("displayNone");
  chris.classList.add("displayNone");
  return false;
}
