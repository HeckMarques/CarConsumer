import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Resultado from './src/pages/Resultado'
import Home from './src/pages/Home'




export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
        name="Home" component={Home} options={{
          title: 'CarConsumer',
          headerTitleAlign: 'center',
          }}
         />
        <Stack.Screen
        name="Resultado" component={Resultado} options={{
          title: 'Resultado',
          headerTitleAlign: 'center',
          }}/>

        </Stack.Navigator>

    </NavigationContainer>
  );
}
