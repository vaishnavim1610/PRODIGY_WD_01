document.querySelector('.menu-icon').addEventListener('click', function () {
    var links = document.querySelector('.responsive-links');
    links.style.display = (links.style.display === 'block' ? 'none' : 'block');
});