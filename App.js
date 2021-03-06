/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text,View,
  Platform,
  StyleSheet
} from 'react-native';

import Route from './src/routes/route';
import reducer from './src/reducers';

//const instructions = Platform.select({
  //ios: 'Press Cmd+R to reload,\n' +
    //'Cmd+D or shake for dev menu',
  //android: 'Double tap R on your keyboard to reload,\n' +
    //'Shake or press menu button for dev menu',
//});

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View styles={styles.header}>
      <View style={styles.imageView}>
      <Image style = {styles.image} source={{uri:""}}/>
      </View>
      <View styles={styles.headerText}>
      <Image source={{uri:""}}/>
        <Text style={{fontSize:20,}}>
           DO YOU NEED...........OVERSEAS?
           </Text>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

 