import { saveCandidates, getCandidates } from "../service/mainService.js";
import { regexPatterns } from "../model/regexPatter.js";
import { validateField } from "../service/validationService.js";
const form = document.getElementById("form-candidato");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault();
    const name = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const education = document.getElementById("educacao").value.trim();
    const age = Number(document.getElementById("idade").value);
    const state = document.getElementById("estado").value.trim();
    const zipCode = document.getElementById("cep").value.trim();
    const description = document.getElementById("descricao").value.trim();
    const skillsInput = document.getElementById("competencias").value.trim();
    const skills = skillsInput.length > 0
        ? skillsInput.split(",").map(skill => skill.trim()).filter(skill => skill !== "")
        : [];
    const errors = [];
    // Validação dos campos
    errors.push((_a = validateField(name, regexPatterns.name, "Nome")) !== null && _a !== void 0 ? _a : "");
    errors.push((_b = validateField(email, regexPatterns.email, "E-mail")) !== null && _b !== void 0 ? _b : "");
    errors.push((_c = validateField(cpf, regexPatterns.cpf, "CPF")) !== null && _c !== void 0 ? _c : "");
    errors.push((_d = validateField(state, regexPatterns.name, "Estado")) !== null && _d !== void 0 ? _d : "");
    errors.push((_e = validateField(zipCode, regexPatterns.cep, "CEP")) !== null && _e !== void 0 ? _e : "");
    errors.push((_f = validateField(description, /.+/, "Descrição")) !== null && _f !== void 0 ? _f : "");
    skills.forEach((tag, i) => {
        const error = validateField(tag, regexPatterns.tag, `Tag ${i + 1}`);
        if (error)
            errors.push(error);
    });
    // Se houver erros, mostrar alerta e retornar
    if (errors.some(error => error)) {
        alert(errors.filter(error => error).join("\n"));
        return;
    }
    const newCandidate = {
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
