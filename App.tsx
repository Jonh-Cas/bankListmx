import 'react-native-gesture-handler';
import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import apiBack from './src/api/apiBanks';
import StackAppNavigation from './src/navigation/StackAppNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <StackAppNavigation />
    </NavigationContainer>
  )
}

export default App