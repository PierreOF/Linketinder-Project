var _a;
import { saveCompanies, getCompanies } from "../service/mainService.js";
import { regexPatterns } from "../model/regexPatter.js";
import { validateField } from "../service/validationService.js";
(_a = document.getElementById("form-empresa")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    event.preventDefault();
    const name = ((_a = document.getElementById("nome")) === null || _a === void 0 ? void 0 : _a.value.trim()) || "";
    const email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value.trim()) || "";
    const cnpj = ((_c = document.getElementById("cnpj")) === null || _c === void 0 ? void 0 : _c.value.trim()) || "";
    const state = ((_d = document.getElementById("estado")) === null || _d === void 0 ? void 0 : _d.value.trim()) || "";
    const zipCode = ((_e = document.getElementById("cep")) === null || _e === void 0 ? void 0 : _e.value.trim()) || "";
    const description = ((_f = document.getElementById("descricao")) === null || _f === void 0 ? void 0 : _f.value.trim()) || "";
    const errors = [];
    // Validação dos campos
    errors.push((_g = validateField(name, regexPatterns.name, "Nome da empresa")) !== null && _g !== void 0 ? _g : "");
    errors.push((_h = validateField(email, regexPatterns.email, "E-mail")) !== null && _h !== void 0 ? _h : "");
    errors.push((_j = validateField(cnpj, regexPatterns.cnpj, "CNPJ")) !== null && _j !== void 0 ? _j : "");
    errors.push((_k = validateField(state, regexPatterns.name, "Estado")) !== null && _k !== void 0 ? _k : "");
    errors.push((_l = validateField(zipCode, regexPatterns.cep, "CEP")) !== null && _l !== void 0 ? _l : "");
    errors.push((_m = validateField(description, /.+/, "Descrição")) !== null && _m !== void 0 ? _m : "");
    // Se houver erros, mostrar alerta e retornar
    if (errors.some(error => error)) {
        alert(errors.filter(error => error).join("\n"));
        return;
    }
    const newCompany = {
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
