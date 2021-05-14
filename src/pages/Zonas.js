import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TesteDistancia from './TesteDistancia';
import IntensidadeAnaero from './IntensidadeAnaero';

const Tab = createBottomTabNavigator();

export default function Zonas( {navigation} ) {
  return (
    
    <NavigationContainer
      independent={true}
    >
        <Tab.Navigator
        >
            <Tab.Screen name = "Teste Distância" component={TesteDistancia}></Tab.Screen>
            <Tab.Screen name = "Intensidade Anaeróbia" component={IntensidadeAnaero}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  );
}