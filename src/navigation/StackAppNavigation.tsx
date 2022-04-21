import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const StackAppNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}

export default StackAppNavigation;