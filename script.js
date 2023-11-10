// Get the current page URL
var currentUrl = window.location.href;

// Get all links in the navigation
var navLinks = document.getElementsByTagName("a");

// Iterate through the links and add the 'active' class to the one with a matching href
for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentUrl) {
    navLinks[i].classList.add("active");
  }
}
