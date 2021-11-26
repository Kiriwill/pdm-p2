import Contato from "../modelo/Contato";
import { ADD_CONTATO } from "./contatos-actions"

//estado centralizado = lista de contatos
const estadoInicial = {
    contatos: []
}

// {
//     //criado pelo combineReducers (fatia de estado)
//     contatos: {
//         //criado pelo reducer e pelo estadoInicial acima 
//         contatos: [
//             Contato
//         ]
//     }
// }

//Reducer
export default (estado = estadoInicial, action) => {
     switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (
                new Date().toString(), 
                action.dadosContato.nomeContato, 
                action.dadosContato.numeroContato, 
                action.dadosContato.imagem
            )
            return{
                contatos: [contato, ...estado.contatos]
            }
        default:
            return estado 

            
    }
}