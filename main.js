// Background menu on scroll

const header = document.getElementById("menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// Welcome body background

const updateBackgroundPosition = (xPercent, yPercent) => {
    body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgb(27, 48, 75), rgb(27, 38, 60), rgb(27, 28, 45))`;
};

const body = document.getElementById("body");

document.addEventListener("mousemove", (event) => {
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;
    updateBackgroundPosition(xPercent, yPercent);
});

window.addEventListener("load", () => {
    const xPercent = (window.innerWidth / 2) * 100 / window.innerWidth;
    const yPercent = (window.innerHeight / 2) * 100 / window.innerHeight;
    updateBackgroundPosition(xPercent, yPercent);
});



// Typing cursor

const typingText1 = document.getElementById("typing-text-1");
const typingText2 = document.getElementById("typing-text-2");
const typingText3 = document.getElementById("typing-text-3");

typingText2.classList.add("no-blink");
typingText3.classList.add("no-blink");

typingText1.addEventListener("animationend", () => {
    typingText1.classList.add("no-blink");
    typingText2.classList.remove("no-blink");
});

typingText2.addEventListener("animationend", () => {
    typingText2.classList.add("no-blink");
    typingText3.classList.remove("no-blink");
});




// Tech skills progression

document.addEventListener("DOMContentLoaded", () => {
    const softSkills = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ajout d'un délai pour chaque élément
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200 + 500); // 200ms entre chaque, avec 500ms de délai initial
            }
        });
    }, {
        threshold: 0.3
    });

    softSkills.forEach(skill => observer.observe(skill));
});



// Soft skills reveal

document.addEventListener("DOMContentLoaded", () => {
    const softSkills = document.querySelectorAll(".soft-skill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ajout d'un délai pour chaque élément
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200 + 500); // 200ms entre chaque, avec 500ms de délai initial
            }
        });
    }, {
        threshold: 0.3
    });

    softSkills.forEach(skill => observer.observe(skill));
});
