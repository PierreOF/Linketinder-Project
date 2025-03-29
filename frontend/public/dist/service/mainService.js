export function getCandidates() {
    console.log("inside get");
    const stored = localStorage.getItem("candidates");
    return stored ? JSON.parse(stored) : [];
}
export function saveCandidates(candidates) {
    localStorage.setItem("candidates", JSON.stringify(candidates));
}
export function deleteCandidate(email) {
    let candidates = getCandidates();
    candidates = candidates.filter(c => c.email !== email);
    saveCandidates(candidates);
}
export function getCompanies() {
    const stored = localStorage.getItem("companies");
    console.log(stored);
    return stored ? JSON.parse(stored) : [];
}
export function saveCompanies(companies) {
    console.log("save companies service");
    localStorage.setItem("companies", JSON.stringify(companies));
    console.log("Empresas salvas no localStorage:", companies);
}
export function deleteCompany(email) {
    let companies = getCompanies();
    companies = companies.filter(c => c.email !== email);
    saveCompanies(companies);
}
