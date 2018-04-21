function aplicarCaixa (nome, isUpperCase) {
  if (isUpperCase) return nome.toUpperCase()

  return nome
}

function aplicarCase (nome, caze) {
  switch (caze) {
    case 'kebab': return nome.replace(' ', '-')
  }

  return nome
}

function dizerOla ({ nome = 'world', caze, upper = false }) {
  const nomeCaixiado = aplicarCaixa(nome, upper)

  const nomeCasado = aplicarCase(nomeCaixiado, caze)

  console.log('Hello', nomeCasado)
}

const meuPrograma = {
  dizerOla
}

module.exports = meuPrograma
