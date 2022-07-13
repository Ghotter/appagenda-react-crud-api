import React, {useEffect, useState} from 'react'; 
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {visualizartodosContatos} from './Cttmodel';
    export default function Cadastro({navigation}){
    return(
        <View style={estilo.container}>
        <TextInput style={estilo.campoTexto}
        placeholder='nome'
        />
        <TextInput style={estilo.campoTexto}
        placeholder='telefone'
        />
        <TextInput style={estilo.campoTexto}
        placeholder='email'
        />
        <TouchableOpacity style={estilo.botao}>
            <Text>Salvar o Contato</Text>
        </TouchableOpacity>
        </View>
    );

}
const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#dcdcdc",
        alignItems:100,
        justifyContent: 100,
    },  
    botao:{
        backgroundColor:"#2f4f4f",
    },
    botao:{
        backgroundColor:"#000080",
    },
    textoBotao:{
        fontSize:20
    }
});