// Background menu on scroll

const header = document.getElementById("menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// Background

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



// Download PDF

const licv = document.getElementById("licv")

licv.addEventListener("click", function () {
    window.open("src/CV.pdf", "_blank")
});




// Hover experiences
const projectList = document.getElementById("project-list");
const projectImage = document.getElementById("project-image");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectDate = document.getElementById("project-date");
const projectAuthors = document.getElementById("project-authors");
const projectLink = document.getElementById("project-link");

projectList.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "LI") {
        const { title, description, image, link, date, authors } = e.target.dataset

        projectTitle.textContent = title;
        projectDescription.textContent = description;
        projectImage.src = image;
        projectDate.textContent = date;
        projectAuthors.textContent = authors;
        e.target.addEventListener("click", () => {
            window.location = link;
        })
    }
});
