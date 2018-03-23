import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import MonsterList from './src/components/MonsterList';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View style={styles.container}>
          <MonsterList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
