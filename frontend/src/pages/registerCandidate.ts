import { saveCandidates, getCandidates } from "../service/mainService.js";
import { Candidate } from "../model/model";

const form = document.getElementById("form-candidato") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = (document.getElementById("nome") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value.trim();
    const education = (document.getElementById("educacao") as HTMLInputElement).value.trim();
    const age = Number((document.getElementById("idade") as HTMLInputElement).value);
    const state = (document.getElementById("estado") as HTMLInputElement).value.trim();
    const zipCode = (document.getElementById("cep") as HTMLInputElement).value.trim();
    const description = (document.getElementById("descricao") as HTMLTextAreaElement).value.trim();
    
    // Transformar string de habilidades em um array, removendo espaços extras e elementos vazios
    const skillsInput = (document.getElementById("competencias") as HTMLInputElement).value.trim();
    const skills = skillsInput.length > 0 
        ? skillsInput.split(",").map(skill => skill.trim()).filter(skill => skill !== "")
        : [];

    // Validação de campos obrigatórios
    if (!name || !email || !education || !cpf || age <= 0 || !state || !zipCode || !description || skills.length === 0) {
        alert("Preencha todos os campos corretamente! O campo de competências não pode estar vazio.");
        return;
    }

    const newCandidate: Candidate = {
        id: Date.now(),
        name,
        email,
        cpf,
        education,
        age,
        state,
        zipCode,
        description,
        skills
    };

    const candidates = getCandidates();
    candidates.push(newCandidate);
    saveCandidates(candidates);

    console.log("Candidato cadastrado:", newCandidate);
    alert("Cadastro realizado com sucesso!");
    form.reset();
});
