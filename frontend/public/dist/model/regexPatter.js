export const regexPatterns = {
    name: /^[A-Za-zÀ-ÿ\s]{2,}$/, // Nome (apenas letras e espaços)
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, // E-mail
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, // CPF
    phone: /^(\(\d{2}\)\s?)?\d{4,5}-\d{4}$/, // Telefone (opcional com DDD)
    cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, // CNPJ
    cep: /^\d{5}-\d{3}$/, // CEP
    tag: /^[A-Za-zÀ-ÿ0-9\-+]{2,}$/ // Tag (letras e números, sem espaços)
};
