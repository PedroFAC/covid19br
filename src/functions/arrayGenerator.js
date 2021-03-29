// Uma função que recebe um número como parametro e retorna um
// Array do tamanho do número recebido, com unidades arbitrárias
// ou iguais a um parâmetro passado, que pode ser omitido

export function arrayGenerator(length, value = 'default') {
  return Array(length).fill(value);
}
