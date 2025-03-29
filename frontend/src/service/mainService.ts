
import { Candidate, Company } from "../model/model";

export function getCandidates(): Candidate[] {
    console.log("inside get")
    const stored = localStorage.getItem("candidates");
    return stored ? JSON.parse(stored) : [];
}

export function saveCandidates(candidates: Candidate[]): void {
    localStorage.setItem("candidates", JSON.stringify(candidates));
}

export function deleteCandidate(email: string): void {
    let candidates = getCandidates();
    candidates = candidates.filter(c => c.email !== email);
    saveCandidates(candidates);
}

export function getCompanies(): Company[] {
    const stored = localStorage.getItem("companies");
    console.log(stored)
    return stored ? JSON.parse(stored) : [];
}

export function saveCompanies(companies: Company[]): void {
    console.log("save companies service")
    localStorage.setItem("companies", JSON.stringify(companies));
    console.log("Empresas salvas no localStorage:", companies);
}

export function deleteCompany(email: string): void {
    let companies = getCompanies();
    companies = companies.filter(c => c.email !== email);
    saveCompanies(companies);
}
