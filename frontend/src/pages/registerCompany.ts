import { saveCompanies, getCompanies } from "../service/mainService.js";
import { Company } from "../model/model";
import { regexPatterns } from "../model/regexPatter.js";
import { validateField } from "../service/validationService.js";

document.getElementById("form-empresa")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("nome") as HTMLInputElement)?.value.trim() || "";
    const email = (document.getElementById("email") as HTMLInputElement)?.value.trim() || "";
    const cnpj = (document.getElementById("cnpj") as HTMLInputElement)?.value.trim() || "";
    const state = (document.getElementById("estado") as HTMLInputElement)?.value.trim() || "";
    const zipCode = (document.getElementById("cep") as HTMLInputElement)?.value.trim() || "";
    const description = (document.getElementById("descricao") as HTMLTextAreaElement)?.value.trim() || "";

    const errors: string[] = [];

    // Validação dos campos
    errors.push(validateField(name, regexPatterns.name, "Nome da empresa") ?? "");
    errors.push(validateField(email, regexPatterns.email, "E-mail") ?? "");
    errors.push(validateField(cnpj, regexPatterns.cnpj, "CNPJ") ?? "");
    errors.push(validateField(state, regexPatterns.name, "Estado") ?? "");
    errors.push(validateField(zipCode, regexPatterns.cep, "CEP") ?? "");
    errors.push(validateField(description, /.+/, "Descrição") ?? "");

    // Se houver erros, mostrar alerta e retornar
    if (errors.some(error => error)) {
        alert(errors.filter(error => error).join("\n"));
        return;
    }

    const newCompany: Company = { 
        id: Date.now(),
        name, 
        email, 
        cnpj, 
        state, 
        zipCode, 
        description 
    };

    let companies = getCompanies();
    companies.push(newCompany);
    saveCompanies(companies);

    alert("Cadastro realizado com sucesso!");
});
