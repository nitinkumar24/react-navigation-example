import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';


export default class ScreenTwo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenTwo </Text>


      </View>
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
