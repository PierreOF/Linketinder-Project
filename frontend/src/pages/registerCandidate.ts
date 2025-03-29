import { saveCandidates, getCandidates } from "../service/mainService.js";
import { Candidate } from "../model/model";
import { regexPatterns } from "../model/regexPatter.js";
import { validateField } from "../service/validationService.js";

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

    const skillsInput = (document.getElementById("competencias") as HTMLInputElement).value.trim();
    const skills = skillsInput.length > 0 
        ? skillsInput.split(",").map(skill => skill.trim()).filter(skill => skill !== "")
        : [];

    const errors: string[] = [];

    // Validação dos campos
    errors.push(validateField(name, regexPatterns.name, "Nome") ?? "");
    errors.push(validateField(email, regexPatterns.email, "E-mail") ?? "");
    errors.push(validateField(cpf, regexPatterns.cpf, "CPF") ?? "");
    errors.push(validateField(state, regexPatterns.name, "Estado") ?? "");
    errors.push(validateField(zipCode, regexPatterns.cep, "CEP") ?? "");
    errors.push(validateField(description, /.+/, "Descrição") ?? "");
    skills.forEach((tag, i) => {
        const error = validateField(tag, regexPatterns.tag, `Tag ${i + 1}`);
        if (error) errors.push(error);
    });

    // Se houver erros, mostrar alerta e retornar
    if (errors.some(error => error)) {
        alert(errors.filter(error => error).join("\n"));
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

    alert("Cadastro realizado com sucesso!");
    form.reset();
});
