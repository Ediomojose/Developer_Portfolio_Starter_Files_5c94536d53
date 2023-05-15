const primaryNav = document.querySelector(".link__list");
const navToggle = document.querySelector(".mobile__nav__toggle");

// Hambuger Menu Funtionality

// Listening for Click Event
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
  
    // Check for visibility and apply using conditional statement
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });