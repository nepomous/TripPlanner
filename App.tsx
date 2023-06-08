import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = createStackNavigator();

const Navigation = () => {
  return (
    <AppNavigator.Navigator>
      <AppNavigator.Screen name="Home" component={HomeScreen} />
    </AppNavigator.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
