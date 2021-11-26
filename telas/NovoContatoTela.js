import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Cores from '../constantes/Cores'
import * as contatosActions from '../store/contatos-actions'
import { useDispatch } from 'react-redux'
import TiraFoto from '../componentes/TiraFoto'

const NovoContatoTela = (props) => {
    const [novoContato, setNovoContato] = useState('')
    const [novoTelefone, setNovoTelefone] = useState('')
    const [imagemURI, setImagemURI] = useState()
    const dispatch = useDispatch() 

    const novoContatoAlterado = (texto) => {
        setNovoContato(texto)
    }

    const novoTelefoneAlterado = (numero) => {
        setNovoTelefone(numero)
    }

    const fotoTirada = (imagemURI) => {
        setImagemURI(imagemURI)
    }


    const adicionarContato = () => {
        const acao = contatosActions.addContato(novoContato, novoTelefone, imagemURI)
        //store.dispatch(acao)
        dispatch(acao)
        setNovoContato('')
        setNovoTelefone('')
        props.navigation.goBack()
    }
    
    
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.titulo}> Adicionar Novo Contato</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={novoContatoAlterado}
                    placeholder="Insira o nome:"
                    value={novoContato}
                
                />

                <TextInput 
                    style={styles.textInput}
                    onChangeText={novoTelefoneAlterado}
                    placeholder="Insira o telefone:"
                    value={novoTelefone}
                
                />

                <TiraFoto
                    onFotoTirada={fotoTirada}
                />

                <Button 
                    title="Salvar Contato"
                    color={Cores.primary}
                    onPress={() => adicionarContato()}
                />
            </View>
        </ScrollView>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    form: {
        margin: 40
    },

    titulo: {
        fontSize: 18,
        marginBottom: 12
    },

    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingVertical: 8,
        //borderColor: "black"
    }

})

//store estado centralizado acesso indireto? disparar acao para add lugar/contato