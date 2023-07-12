export function projectCardsGenerator(projectsArray, projectCardsContainer) {
    projectCardsContainer.innerrHTML = '';
    let projectCardsFragment = document.createDocumentFragment();
    projectsArray.forEach(project => {
        let div = document.createElement("div");
        div.classList.add('card', 'shadow');
        div.innerHTML =
            `<img src="${project.imageURL}" class="card-img-top p-2"
                alt="${project.title}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <div class="d-flex justify-content-between align-items-end px-1">
                    <a class="code-link" href="${project.linkToCode}" target="_blank">Repositorio</a>
                    <button type="button" class="animated-button"><a href="${project.linkToProject}" target="_blank">Ir al sitio</a></button>
                </div>
            </div>`;
        projectCardsFragment.appendChild(div);
    })
    projectCardsContainer.appendChild(projectCardsFragment);
}

export function hardSkillsGenerator(skillsArray, hardSkillsContainer) {
    hardSkillsContainer.innerHTML = '';
    let hardSkillsFragment = document.createDocumentFragment();
    skillsArray.forEach(skill => {
        if (skill.isSkillHard) {
            let div = document.createElement("div");
            div.classList.add('row');
            div.innerHTML = `
                <div class="col">
                    <p>${skill.skill}</p>
                </div>
                <div class="col">
                    <span>
                        ${[1, 2, 3, 4, 5].map(i => `
                            <i class="bi bi-star-fill ${i <= skill.scoreOverFive ? 'estrella-on' : 'estrella-off'}"></i>
                        `).join('')}
                    </span>
                </div>`;
            hardSkillsFragment.appendChild(div);
        }
    });
    hardSkillsContainer.appendChild(hardSkillsFragment);
}

export function softSkillsGenerator(skillsArray, softSkillsContainer) {
    softSkillsContainer.innerHTML = '';
    let softSkillsFragment = document.createDocumentFragment();
    skillsArray.forEach(skill => {
        if (!skill.isSkillHard) {
            let div = document.createElement("div");
            div.classList.add('row');
            div.innerHTML = `
                <div class="col">
                    <p>${skill.skill}</p>
                </div>
                <div class="col">
                    <span>
                        ${[1, 2, 3, 4, 5].map(i => `
                            <i class="bi bi-star-fill ${i <= skill.scoreOverFive ? 'estrella-on' : 'estrella-off'}"></i>
                        `).join('')}
                    </span>
                </div>`;
            softSkillsFragment.appendChild(div);
        }
    });
    softSkillsContainer.appendChild(softSkillsFragment);
}
