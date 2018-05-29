import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { createDrawerNavigator ,createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import {createBottomTabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'

export default class AppTabNavigator extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            headerLeft:(
                <View style={{padding : 10}}>
                <Ionicons title="bu" name="md-menu" size={28} onPress={() => navigation.navigate('DrawerOpen')} />
                </View>
            )
        }
    }
  render() {
    return (
      <HomeScreenTabNavigator/>
    );
  }
}


const HomeScreenTabNavigator = new createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel : 'Feed',
            tabBarIcon : ()=>(
                <Ionicons name = "md-compass" size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel : 'Feed',
            tabBarIcon : ()=> (
                <Ionicons name = "md-compass" size={24} />
            )
        }
    },

})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
