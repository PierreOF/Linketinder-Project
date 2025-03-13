// models.ts

export type Candidate = {
    id: number;
    name: string;
    email: string;
    cpf: string;
    education: string;
    age: number;
    state: string;
    zipCode: string;
    description: string;
    skills: string[];
};

export type Company = {
    id: number;
    name: string;
    email: string;
    cnpj: string;
    state: string;
    zipCode: string;
    description: string;
};

export type Job = {
    id: number;
    companyId: number;
    title: string;
    description: string;
    requirements: string[];
};

const name = (document.getElementById("nome") as HTMLInputElement)?.value || "";
const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
const cpf = (document.getElementById("cpf") as HTMLInputElement)?.value || "";
const education = (document.getElementById("educacao") as HTMLInputElement)?.value || "";
const age = Number((document.getElementById("idade") as HTMLInputElement)?.value) || 0;
const state = (document.getElementById("estado") as HTMLInputElement)?.value || "";
const zipCode = (document.getElementById("cep") as HTMLInputElement)?.value || "";
const description = (document.getElementById("descricao") as HTMLTextAreaElement)?.value || "";
const skills = (document.getElementById("competencias") as HTMLInputElement)?.value?.split(",") || [];
const cnpj = (document.getElementById("cnpj") as HTMLInputElement)?.value || "";

const newCompany: Company = { 
    id: Date.now(), 
    name, 
    email, 
    cnpj, 
    state, 
    zipCode, 
    description 
};

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
