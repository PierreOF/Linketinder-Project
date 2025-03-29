export function validateField(value, pattern, fieldName) {
    if (!pattern.test(value)) {
        return `Erro: ${fieldName} inválido!`;
    }
    return null;
}
