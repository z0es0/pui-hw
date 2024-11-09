const projects = [
  {
    title: "Season",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  },
  {
    title: "Yosemite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  },
  {
    title: "Ambulatory Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  },
  {
    title: "COVID-19 Vaccines",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  },
  {
    title: "Public Health in the Solomon Islands",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  },
  {
    title: "Placeholder Text",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Research", "UX Design"],
    imageSrc: "images/placeholderimage.jpeg"
  }
];

function loadProjects() {
  const projectContainer = document.getElementById("projects");

  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const projectImage = document.createElement("img");
    projectImage.src = project.imageSrc;
    projectImage.alt = project.title;
    projectImage.classList.add("project-image");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("tags");

    project.tags.forEach(tag => {
      const tagElement = document.createElement("span");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(tagsContainer);

    projectContainer.appendChild(projectCard);
  });
}

// Load projects when the page loads
document.addEventListener("DOMContentLoaded", loadProjects);