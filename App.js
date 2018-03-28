import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import MonsterList from './src/components/MonsterList';
import MonsterStatsModal from './src/components/MonsterStatsModal';

export default class App extends React.Component {
  render() {
    const {modalContainerStyles} = styles
    return (
      <Provider store={createStore(reducers)} >
        <View style={styles.container}>
          <MonsterList />
          <MonsterStatsModal/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF0DB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
