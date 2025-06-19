const active = document.querySelectorAll('.navigation a');
active.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});