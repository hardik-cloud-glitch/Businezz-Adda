document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggleButton.classList.toggle("active");
    });
});


const material = document.getElementById('material');
material.addEventListener('click', function () {
    window.location = 'material.html'
})

document.getElementById('enquiry').addEventListener('click', function () {
    window.location = 'contact.html'
})

document.getElementById('about').addEventListener('click', function () {
    window.location = 'about.html'
})

document.getElementById('feedback').addEventListener('click', function () {
    window.location = 'contact.html'
})