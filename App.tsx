import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestApp from './page/TestApp';
import TestDetail from './page/TestDetail';
import Timer from './page/Timer';

export type RootStackParamList = {
  Timer : {min:number,sec:number}
  Home: undefined;
  Detail:
    | {
        id: number;
      }
    | undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TestApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={TestDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
