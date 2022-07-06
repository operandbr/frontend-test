const regex = /^[a-zA-ZàáâãèéêìíîńòóôõùúûýñçÀÁÂÃÈÉÊÌÍÎŃÒÓÔÕÙÚÛÝÑ' -]{2,}\s[a-zA-ZàáâãèéêìíîńòóôõùúûýñçÀÁÂÃÈÉÊÌÍÎŃÒÓÔÕÙÚÛÝÑ' -]{2,}$/u;

/**
 * Name rule.
 * The entered name cannot be simple, it must contain at least two digits in the first and
 * second names
 * @param { String } value - The Name you entered cannot be simple,
 * @example 'foo' is a invalid name
 * @example 'fo' is a invalid name
 * @example 'foo bar' is a valid name
 * @return { Boolean } is a valid name
 */
const name = (value, optional = false) => {
  if (optional && (value === '' || !value)) {
    return true;
  }
  return value && value.length && regex.test(value);
};

function validaNome(nome) {
  if (!nome) {
    return false;
  }

  return regex.test(nome.trim());
}

export { name, validaNome };
export default name;
