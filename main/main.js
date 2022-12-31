const projectSection = document.getElementById("section-projects");
const data = fetch("./src/days-info.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCardsProjects(data);
  });

async function createCardsProjects(data) {
  projects = "";
  data["projects"].forEach((project) => {
     projects += cardStructure(project)
  });
  projectSection.innerHTML = projects
}

function cardStructure(project) {
  const card = `
  <div>
    <span class="title-day">Day ${project["number"]}</span>
    <img src="${project["photo"]}" alt="Day ${project["number"]}" />
    <div class="card-body">
      <span class="card-title">${project["name"]}</span>
      <div class="buttons">
        <a href="${project["link-demo"]}" class="btn btn-primary" target="_blank">
          Demo
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
        <a href="${project["link-repo"]}" class="btn btn-secondary" target="_blank>
          Code
          <i class="bi bi-code"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  return card;
}