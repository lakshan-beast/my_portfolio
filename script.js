// slider
let sliderIndex = 0;
const statsSlides = document.querySelector(".stats-slides");
const totalStats = document.querySelectorAll(".slides-para").length;

setInterval(() => {
  sliderIndex++;
  if (sliderIndex >= totalStats) sliderIndex = 0;
  // statsSlides.style.transform = `translateX(-${sliderIndex * 100}%)`;
}, 3000);

// header sticky
const header = document.getElementById("header");
const navbar = document.getElementById("header-navbar");

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY > 50;
  header.classList.toggle("scrolled", scrolled);
  navbar.classList.toggle("scrolled", scrolled);

  header.classList.toggle("transparent", !scrolled);
  navbar.classList.toggle("transparent", !scrolled);
});

const bar_links = document.getElementById("bars-links");
const more_btns = document.getElementById("more-btn");
const icon = more_btns.querySelector("i");

// Toggle menu & icon
more_btns.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  bar_links.classList.toggle("active");

  // icon toggle
  if (bar_links.classList.contains("active")) {
    icon.classList.replace("fa-bars-staggered", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars-staggered");
  }
});

// Click outside to close
document.addEventListener("click", (e) => {
  if (!bar_links.contains(e.target) && !more_btns.contains(e.target)) {
    bar_links.classList.remove("active");
    icon.classList.replace("fa-xmark", "fa-bars-staggered");
  }
});

// copyright year script
const YEAR = (document.getElementById("year").innerHTML =
  new Date().getFullYear());

// top btn script
let topBtn = document.getElementById("top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// calculate My Experience script
function calculateExperience(startDate) {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years} Years & ${months} Months Experience`;
  } else {
    return `${months} Months Experience`;
  }
}

// my skills starts date store
const skills = {
  html: new Date("January 01, 2026"),
  css: new Date("February 15, 2026"),
  git: new Date("February 01, 2026"),
  github: new Date("February 01, 2026"),
  js: new Date("March 01, 2026"),
  problem: new Date("March 02, 2026"),
  react: new Date("March 20, 2026"),
  sass: new Date("March 15, 2026"),
  bootstrap: new Date("March 25, 2026"),
  taildwind: new Date("March 25, 2026"),
  ui: new Date("March 25, 2026"),
};
for (let skill in skills) {
  document.getElementById(`${skill}-exp`).innerHTML = calculateExperience(
    skills[skill],
  );
}

// projects cards create and display
const project_cards = document.getElementById("projects-cards");

function createProject(img, title, tags, description, githubUrl, liveUrl) {
  const project = document.createElement("div");
  project.classList.add("projects-card");

  // Image
  const image = document.createElement("img");
  image.classList.add("project-image");
  image.src = img;
  image.alt = title;
  project.appendChild(image);

  // Tags
  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tech-tags");
  const tagSpan = document.createElement("span");
  tagSpan.classList.add("tags");
  tagSpan.textContent = tags;
  tagsDiv.appendChild(tagSpan);
  project.appendChild(tagsDiv);

  // Title
  const h3 = document.createElement("h3");
  h3.classList.add("project-name");
  h3.textContent = title;
  project.appendChild(h3);

  // Description
  const desc = document.createElement("p");
  desc.classList.add("project-desc");
  desc.textContent = description;
  project.appendChild(desc);

  // GitHub Link
  const githubLink = document.createElement("a");
  githubLink.href = githubUrl;
  githubLink.target = "_blank";
  githubLink.innerHTML = `<i class="fa-brands fa-github"></i> View on GitHub`;
  project.appendChild(githubLink);

  // Live Link
  const liveLink = document.createElement("a");
  liveLink.href = liveUrl;
  liveLink.target = "_blank";
  liveLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> Live Website`;
  project.appendChild(liveLink);

  // Final append to container
  project_cards.appendChild(project);
}

// Projects array
const projects = [
  // info.lanka Project
  {
    img: "Assets/info.lanka org.png",
    tags: "HTML, CSS, JS",
    title: "Info.Lanka Project",

    description:
      "A Responsive informationl website designed to showcase key facts, culture and highlights about Sri Lanka. Built with a clean layout and user-friendly navigation for easy browsing.",
    link: {
      github: "https://github.com/lakshan-beast/cabana",
      live: "https://lakshan-beast.github.io/cabana",
    },
  },
  // educa project
  {
    img: "Assets/educas.png",
    tags: "HTML, CSS, JS",
    title: "Educa Web Portal",

    description:
      "A modern education-themed website designed to present courses, learning resources, and educational information using a sturctured and responsive layout.",
    link: {
      github: "https://github.com/lakshan-beast/cabana",
      live: "https://lakshan-beast.github.io/cabana",
    },
  },
  // cabana admin
  {
    img: "Assets/cabana.png",
    tags: "HTML, CSS, JS",
    title: "Cabana Admin Dashboard",

    description:
      "a modern and responsive landing page desogned for a cabana or resort-style business. The website forces on clean visuals, smooth layout, and an attractive presentation to highlght services and create a relaxing user experince",
    link: {
      github: "https://github.com/lakshan-beast/cabana",
      live: "https://lakshan-beast.github.io/cabana",
    },
  },
  // surorise
  {
    img: "../files/surprise.png",
    tags: "HTML, CSS, JS",
    title: "Surprise Project",

    description:
      "A small interactive web project built with JavaScript creates a fun and engaging user experience through dynamic elements and simple animations.",
    link: {
      github: "https://github.com/lakshan-beast/cabana",
      live: "https://lakshan-beast.github.io/cabana",
    },
  },
];

// Loop through projects array & create cards
projects.forEach((project) => {
  createProject(
    project.img,
    project.title,
    project.tags,
    project.description,
    project.link.github,
    project.link.live,
  );
});
