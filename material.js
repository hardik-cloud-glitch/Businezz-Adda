const uid = document.getElementById('uid');
const submit = document.getElementById('subBtn');

if (uid.value = 'BA0001') {
    submit.addEventListener('click', function () {
        window.location = 'material-2.html'
    })
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    window.location.href = 'meta.pdf';
});



document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggleButton.classList.toggle("active");
    });
});
