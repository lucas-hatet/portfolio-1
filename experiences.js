const projectList = document.getElementById("project-list");
const projectImage = document.getElementById("project-image");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectLink = document.getElementById("project-link");

projectList.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "LI") {
        const { title, description, image, link } = e.target.dataset

        projectTitle.textContent = title;
        projectDescription.textContent = description;
        projectImage.src = image;
        projectLink.href = link;
    }
});
