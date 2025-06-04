document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(res => res.text())
        .then(html => document.getElementById('navbar-placeholder').innerHTML = html);
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(res => res.text())
        .then(html => document.getElementById('footer-placeholder').innerHTML = html);
});

document.addEventListener("DOMContentLoaded", function() {
    // Fetch existing navbar
    fetch('navbar.html')
        .then(res => res.text())
        .then(html => document.getElementById('navbar-placeholder').innerHTML = html);

    const img = document.getElementById('tamalito-img');
    if (img) {
        const images = [
            'resources/tamalito/1.jpg',
            'resources/tamalito/2.jpg',
            'resources/tamalito/3.jpg',
            'resources/tamalito/4.jpg'
        ];
        let idx = 0;
        let transitionDuration = 1000;
        let changeInterval = 3000;
        setInterval(() => {
            img.style.opacity = 0;
            setTimeout(() => {
                idx = (idx + 1) % images.length;
                img.src = images[idx];
                img.style.opacity = 1;
            }, transitionDuration); // match transition duration
        }, changeInterval); // change image every 3 seconds
    }
});