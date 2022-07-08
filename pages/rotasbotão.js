import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigation} from '@react-navigation/native-stack'

const navegacao = createNativeStackNavigation();
import home from './pages/Home';
import cadastro from '../pages/Cadastro';

export default function RotasBotao() {
  return (
      <NavigationContainer>
          <nav.Navigator>
              <nav.Screen name="home" component={Home}/>
              <nav.Screen name="cadastro" component={cadastro}/>
          </nav.Navigator>
      </NavigationContainer>
    
  );
}