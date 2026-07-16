// Mobile menu (future ready)

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});



// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".section,.hero,.project-card,.skill-card").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});



// Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

