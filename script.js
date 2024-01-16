document.querySelector('.menu-icon').addEventListener('click', function () {
    var links = document.querySelector('.responsive-links');
    links.style.display = (links.style.display === 'block' ? 'none' : 'block');
});

// JavaScript to dynamically update the current year
document.getElementById("currentYear").innerText =
new Date().getFullYear();