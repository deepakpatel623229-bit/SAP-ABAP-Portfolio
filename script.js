"use strict";

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("show-menu");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show-menu");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navLinks.classList.remove("show-menu");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {
    let currentSection = "home";
    const scrollPosition = window.scrollY + 150;

    sections.forEach(function (section) {
        if (scrollPosition >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    navItems.forEach(function (link) {
        const targetId = link.getAttribute("href");

        if (targetId === "#" + currentSection) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);


/* =========================
   FOOTER YEAR
========================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================
   PROFILE PHOTO FALLBACK
========================= */

const profilePhoto = document.querySelector(".profile-photo");

if (profilePhoto) {
    profilePhoto.addEventListener("error", function () {
        profilePhoto.alt = "Add your photo as assets/profile.jpg";
        profilePhoto.style.objectFit = "contain";
        profilePhoto.style.padding = "20px";
        profilePhoto.style.backgroundColor = "#15253a";

        console.warn(
            "Profile photo not found. Add your image at assets/profile.jpg"
        );
    });
}


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("Deepak Patel's SAP ABAP Portfolio loaded successfully.");
