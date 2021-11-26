import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Cores from '../constantes/Cores'

const ContatoItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelect}
            style={styles.contatoItem}>

            <Image 
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View
                style={styles.infoContainer}>
                <Text
                    style={styles.nomeContato}>{props.nomeContato}</Text>
                <Text
                    style={styles.numeroContato}>{props.numeroContato}</Text>
                <Text
                    style={styles.endereco}>{props.endereco}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeContato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },

    numeroContato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },

    endereco: {
        color: '#777',
        fontSize: 16,
    }
})

export default ContatoItem