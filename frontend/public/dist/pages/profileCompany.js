import { getCandidates, getCompanies } from "../service/mainService.js";
document.addEventListener("DOMContentLoaded", () => {
    const companies = getCompanies();
    if (companies.length > 0) {
        const profile = companies[companies.length - 1];
        document.getElementById("nome").textContent = profile.name;
        document.getElementById("email").textContent = profile.email;
        document.getElementById("cnpj").textContent = profile.cnpj;
        document.getElementById("estado").textContent = profile.state;
        document.getElementById("cep").textContent = profile.zipCode;
        document.getElementById("descricao").textContent = profile.description;
    }
    const candidateTable = document.querySelector("#tabela-candidatos tbody");
    candidateTable.innerHTML = "";
    const candidatos = getCandidates();
    candidatos.forEach(candidate => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${candidate.skills.join(", ")}</td><td>${candidate.education}</td>`;
        candidateTable.appendChild(row);
    });
    generateSkillsChart(candidatos);
});
function generateSkillsChart(candidates) {
    const canvas = document.getElementById("myChart");
    if (!canvas)
        return;
    // Resetar gráfico se já existir um anterior
    const existingChart = window.Chart.getChart(canvas);
    if (existingChart) {
        existingChart.destroy();
    }
    // Criar um contador de competências
    const skillsCount = {};
    candidates.forEach(candidate => {
        candidate.skills.forEach((skill) => {
            skillsCount[skill] = (skillsCount[skill] || 0) + 1;
        });
    });
    // Converter os dados para o formato do Chart.js
    const labels = Object.keys(skillsCount);
    const data = Object.values(skillsCount);
    new window.Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                    label: 'Número de Candidatos',
                    data: data,
                    borderWidth: 1,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)'
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
