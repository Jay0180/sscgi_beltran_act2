
const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = dot.getAttribute('data-index');


        track.style.transform = `translateX(-${index * 100}%)`;


        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";


    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });


    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
