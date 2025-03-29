// models.ts
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
const name = ((_a = document.getElementById("nome")) === null || _a === void 0 ? void 0 : _a.value) || "";
const email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
const cpf = ((_c = document.getElementById("cpf")) === null || _c === void 0 ? void 0 : _c.value) || "";
const education = ((_d = document.getElementById("educacao")) === null || _d === void 0 ? void 0 : _d.value) || "";
const age = Number((_e = document.getElementById("idade")) === null || _e === void 0 ? void 0 : _e.value) || 0;
const state = ((_f = document.getElementById("estado")) === null || _f === void 0 ? void 0 : _f.value) || "";
const zipCode = ((_g = document.getElementById("cep")) === null || _g === void 0 ? void 0 : _g.value) || "";
const description = ((_h = document.getElementById("descricao")) === null || _h === void 0 ? void 0 : _h.value) || "";
const skills = ((_k = (_j = document.getElementById("competencias")) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.split(",")) || [];
const cnpj = ((_l = document.getElementById("cnpj")) === null || _l === void 0 ? void 0 : _l.value) || "";
const newCompany = {
    id: Date.now(),
    name,
    email,
    cnpj,
    state,
    zipCode,
    description
};
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
export {};
