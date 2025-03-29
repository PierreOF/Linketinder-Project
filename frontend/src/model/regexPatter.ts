
export const regexPatterns = {
    name: /^[A-Za-zÀ-ÿ\s]{2,}$/, // (apenas letras e espaços)
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 
    phone: /^(\(\d{2}\)\s?)?\d{4,5}-\d{4}$/, // (opcional com DDD)
    cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 
    cep: /^\d{5}-\d{3}$/,
    tag: /^[A-Za-zÀ-ÿ0-9\-+]{2,}$/ // (letras e números, sem espaços)
};
