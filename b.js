'use strict';



/* add event on element */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/* navbar toggle */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);


/* header & back top btn active */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");  
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.querySelector('.footer-form input[name="email_address"]');
  const email = emailInput.value;

  if (email.trim() === '') {
    alert('Please enter a valid email address.');
  } else {
    alert(`Thank you for subscribing with email: ${email}`);
    emailInput.value = ''; 
  }
}

const form = document.getElementById('newsletter');
form.addEventListener('submit', handleSubmit);