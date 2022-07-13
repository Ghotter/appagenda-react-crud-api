import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const nav = createStackNavigator();

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';

export default function RotasBotao() {
  return (
      <NavigationContainer>
          <nav.Navigator>
              <nav.Screen name="home" component={Home}/>
              <nav.Screen name="cadastro" component={Cadastro}/>
          </nav.Navigator>
      </NavigationContainer>
    
  );
}