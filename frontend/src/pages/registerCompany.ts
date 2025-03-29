
import { saveCompanies, getCompanies } from "../service/mainService.js";
import { Company } from "../model/model";

document.getElementById("form-empresa")?.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const form = document.getElementById("form-empresa") as HTMLFormElement;
    const name = (document.getElementById("nome") as HTMLInputElement)?.value.trim() || "";
    const email = (document.getElementById("email") as HTMLInputElement)?.value.trim() || "";
    const cnpj = (document.getElementById("cnpj") as HTMLInputElement)?.value.trim() || "";
    const state = (document.getElementById("estado") as HTMLInputElement)?.value.trim() || "";
    const zipCode = (document.getElementById("cep") as HTMLInputElement)?.value.trim() || "";
    const description = (document.getElementById("descricao") as HTMLTextAreaElement)?.value.trim() || "";
    
    if (!name || !email || !cnpj || !state || !zipCode || !description) {
        alert("Preencha todos os campos corretamente!");
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
    
    console.log("Empresa cadastrada:", newCompany);
    alert("Cadastro realizado com sucesso!");
    form.reset();
});