import { getCandidates } from "../service/mainService.js";
document.addEventListener("DOMContentLoaded", () => {
    // candidato
    const candidates = getCandidates();
    if (candidates.length > 0) {
        const lastCandidate = candidates[candidates.length - 1];
        document.getElementById("nome").textContent = lastCandidate.name;
        document.getElementById("email").textContent = lastCandidate.email;
        document.getElementById("idade").textContent = lastCandidate.age.toString();
        document.getElementById("estado").textContent = lastCandidate.state;
        document.getElementById("descricao").textContent = lastCandidate.description;
        document.getElementById("competencias").textContent = lastCandidate.skills.join(", ");
    }
    // vagas ---------------
    const jobs = [];
    const companyTable = document.querySelector("#tabela-vagas tbody");
    companyTable.innerHTML = "";
    if (jobs.length > 0) {
        jobs.forEach(job => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${job.name}</td>
                <td>${job.description}</td>
                <td>${job.cnpj}</td>
            `;
            companyTable.appendChild(row);
        });
    }
    else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6" style="text-align: center;">Nenhuma vaga cadastrada.</td>`;
        companyTable.appendChild(row);
    }
});
