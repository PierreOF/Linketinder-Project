import { Company,Candidate, Job } from "../model/model";
import { getCompanies,getCandidates } from "../service/mainService.js";

document.addEventListener("DOMContentLoaded", () => {

    // candidato
    const candidates: Candidate[] = getCandidates();
    if (candidates.length > 0) {
        const lastCandidate = candidates[candidates.length - 1];
        
        (document.getElementById("nome") as HTMLSpanElement).textContent = lastCandidate.name;
        (document.getElementById("email") as HTMLSpanElement).textContent = lastCandidate.email;
        (document.getElementById("idade") as HTMLSpanElement).textContent = lastCandidate.age.toString();
        (document.getElementById("estado") as HTMLSpanElement).textContent = lastCandidate.state;
        (document.getElementById("descricao") as HTMLSpanElement).textContent = lastCandidate.description;
        (document.getElementById("competencias") as HTMLSpanElement).textContent = lastCandidate.skills.join(", ");
    } 


    // vagas ---------------
    const jobs : any[] = [];
    
    const companyTable = document.querySelector("#tabela-vagas tbody") as HTMLTableSectionElement;
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
    } else {

        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6" style="text-align: center;">Nenhuma vaga cadastrada.</td>`;
        companyTable.appendChild(row);
    }
});
