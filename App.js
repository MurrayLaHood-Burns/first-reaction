// @flow
import React, {Component}  from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import MyStatusBar from './src/components/MyStatusBar';

export default class App extends Component {
  render() {
    return (
      <View>
        <MyStatusBar />
        <Header headerText={'First Reaction'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20
  }
});
