import React from 'react';
import container from './navegacao/ContatosNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

//Combina um só reducer que foi criado
const rootReducer = combineReducers({
  contatos: contatosReducer
})

//aglomerado de reducers, função dispatch, é o aglomerado do fluxo redux;
//middleware intercepta a acao antes dela chegar no estado centralizado
//reduxThunk: executa assincrono
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

//Provider: fornece a props a todos os componentes react 
export default function App() {
  return <Provider store={store}>
      {container}
  </Provider>
}

