document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggleButton.classList.toggle("active");
    });
});
