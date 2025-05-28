function geradorDeTagsDeIdentificacao (nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado (idade, porte) {
  const portesPermitidos = ['P', 'M', 'G']
  return idade >= 1 && portesPermitidos.includes(porte)
}

function calcularConsumoDeRacao (nome, idade, peso) {
  const qtdGramasPorKilo = 300
  return peso * qtdGramasPorKilo
}

function decidirTipoDeAtividadePorPorte (porte) {
  const portesComAtividade = {
    pequeno: 'brincar dentro de casa',
    medio: 'brincar no quintal',
    grande: 'brincar no parque'
  }
  return portesComAtividade[porte]
}

async function buscarDadoAsync () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca')
    }, 200)
  })
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
