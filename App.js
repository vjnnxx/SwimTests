import React from 'react';
import {Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importando componentes customizados
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';

//Criando a stack

const Stack = createStackNavigator();

//Página inicial do aplicativo
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = "Home"
      screenOptions = {{
        headerTitleAlign: 'center', 
        headerTitleStyle: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        }}}>
        <Stack.Screen 
        name= "Home" 
        component={Home}
        options = {{
          title: '',
          headerShown: false,
        }}
        headerMode = 'none'
        />
        <Stack.Screen 
        name= "Menu" 
        component={Menu}
        options={{
          title: 'Testes', 
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

