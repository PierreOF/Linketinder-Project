

export function validateField(value: string, pattern: RegExp, fieldName: string): string | null {
    if (!pattern.test(value)) {
        return `Erro: ${fieldName} inválido!`;
    }
    return null;
}
