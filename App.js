import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DrawerNavigator from './screens/DrawerNavigator'


const AppStackNavigator = new createStackNavigator({
    WelcomeScreen : {screen : WelcomeScreen },
    LoginScreen : {screen : LoginScreen},
    SignUpScreen : {screen : SignUpScreen},
    DrawerNavigator : {
        screen : DrawerNavigator,
        navigationOptions : {
            header : null
        }
    },


})

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
