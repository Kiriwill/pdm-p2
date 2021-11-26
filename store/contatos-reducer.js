import Contato from "../modelo/Contato";
import { ADD_CONTATO } from "./contatos-actions"

//estado centralizado
const estadoInicial = {
    contatos: []
}

//funcao que manipula
export default (estado = estadoInicial, action) => {
    //console.log(estado)
    //console.log(action)
     switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (new Date().toString(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagem)
            return{
                contatos: [contato, ...estado.contatos]
            }
        default:
            return estado 

            
    }
}