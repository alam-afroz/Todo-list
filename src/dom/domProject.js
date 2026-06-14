import { myProjects } from " ../modules/projectManager";

function showProjects(project) {
  const content = document.getElementById("content");

  const projectCard = document.createElement("div");
  projectCard.id = "project_card";
  projectCard.textContent = "Project";
  content.appendChild(projectCard);
}
