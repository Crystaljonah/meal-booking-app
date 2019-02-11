let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  class DisplayOrder {
    constructor() {
      this.hoverButton = document.querySelectorAll(".menu--item");
      this.events();
    }

    events() {
      // console.log(this.hoverButton)
      this.orderButton();
    }

    orderButton() {
      this.hoverButton.forEach(e => {
        e.addEventListener("mouseover", () => {
          e.children[2].style.display = "block";
        });
        e.addEventListener("mouseleave", () => {
          e.children[2].style.display = "none";
        });
      });
    }
  }

  var display = new DisplayOrder();
});
