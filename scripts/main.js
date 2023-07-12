import { projectCardsGenerator, hardSkillsGenerator, softSkillsGenerator } from "./section-generator.js";
import { PEOPLE } from "./mock-data.js";

const projectCardsContainer = document.getElementById("projectCards");
const hardSkillsContainer = document.getElementById("hard-skills")
const softSkillsContainer = document.getElementById("soft-skills")

const projectsArray = PEOPLE.projects;
const skillsArray = PEOPLE.skills;

projectCardsGenerator(projectsArray, projectCardsContainer);
hardSkillsGenerator(skillsArray, hardSkillsContainer);
softSkillsGenerator(skillsArray, softSkillsContainer);


// --------------------------------------
// Animaciones de scroll
// --------------------------------------

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});




// Navbar sticky navigation bar on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});