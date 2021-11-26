import React from 'react';
import container from './navegacao/ContatosNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
})

//middleware intercepta a acao antes dela chegar no estado centralizado
//reduxThunk: 
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
      {container}
  </Provider>
}

