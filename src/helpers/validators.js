export const requiredValidator = value => (value ? undefined : 'Campo obrigatório');
const maxLength = (max, text) => value => (value && value.length > max ? `Insira no máximo ${max} ${text}` : undefined);
export const maxLength5 = (maxLength(5, 'alternativas'));
export const maxLength50 = (maxLength(50, 'caracteres'));
export const maxLength250 = (maxLength(250, 'caracteres'));

const minLength = (min, text) => value => (value && value.length < min ? `Insira no minimo ${min} ${text}` : undefined);
export const minLength2Alternatives = (minLength(2, 'opções'));