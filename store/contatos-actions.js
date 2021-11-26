//impont constante
export const ADD_CONTATO = 'ADD_CONTATO'

//CRIADORA de acao - devovler acao - Objeto JSON
// type + payload
export const addContato = (nomeContato, numeroContato, imagem) => {
    return {
        type: ADD_CONTATO,
        dadosContato: {
            nomeContato: nomeContato,
            numeroContato: numeroContato,
            imagem: imagem
        }
    }
}