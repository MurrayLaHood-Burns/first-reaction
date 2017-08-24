// @flow
import React, {Component}  from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import MyStatusBar from './src/components/MyStatusBar';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyStatusBar />
        <Header headerText={'First Reaction'} />
        <AlbumList />
      </View>
    );
  }
}
