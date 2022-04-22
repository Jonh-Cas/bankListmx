import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import BankListScreen from '../screens/BankListScreen';

const Stack = createStackNavigator();

const StackAppNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BankListScreen" component={BankListScreen} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}

export default StackAppNavigation;