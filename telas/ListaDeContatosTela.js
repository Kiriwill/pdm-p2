import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ContatoItem from '../componentes/ContatoItem'

function ListaDeContatosTela(props) {
    const lugares = useSelector(estado => estado.contatos.contatos)
    return (
        <FlatList
            data={lugares}
            keyExtractor={contato => contato.id}
            renderItem={contato => (
                <ContatoItem 
                    nomeContato={contato.item.titulo}
                    numeroContato={contato.item.telefone}
                    imagem={contato.item.imagemURI}
                    //onSelect={()=> props.navigate('DetalhesDoContato',{
                    //    tituloContato: contato.item.titulo, idContato: contato.item.id
                    //})}
                />
            )} 
        />
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({})

//store estado centralizado