import React from 'react';
import { Linking, StyleSheet, Text, View, Image, Button } from 'react-native';
import styles from './Styles'
import Home from './scenes/Home'
import AddRun from './scenes/Add_Run'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="AddRun"
            component={AddRun}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App