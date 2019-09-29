/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CharacterInput from 'react-native-character-input';

export default class App extends Component {
  state = {
    value: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <CharacterInput
          placeHolder='YYYY/MM/DD'
          showCharBinary='1111011011'
          length={10}
          handleChange={(value) => console.log(value)}
          inputType='underlined'
          keyboardType='numeric'
        />
        <CharacterInput
          placeHolder='YYYY/MM/DD'
          showCharBinary='1111011011'
          length={10}
          handleChange={(value) => console.log(value)}
          inputType='outlined'
          keyboardType='numeric'
        />
        <CharacterInput
          placeHolder='YYYY/MM/DD'
          showCharBinary='1111011011'
          length={10}
          handleChange={(value) => console.log(value)}
          inputType='contained'
          keyboardType='numeric'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
