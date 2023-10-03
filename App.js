import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Frame1a from './src/component/Frame1a'; // 
import Frame1b from './src/component/Frame1b'; //
import Frame1c from './src/component/Frame1c'; //
import Frame1d from './src/component/Frame1d';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HOME"
          component={Frame1a}
          options={{ title: 'HOME' }}
        />
        <Stack.Screen
          name="Login"
          component={Frame1b}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="NEXT"
          component={Frame1c}
          options={{ title: 'BACK TO LOGIN' }}
        />
         <Stack.Screen
          name="VERIFYCODE"  
          component={Frame1d}
          options={{ title: 'BACK' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


