// @flow
import React, {Component}  from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner, Button} from './src/components/common';
import MyStatusBar from './src/components/MyStatusBar';
import AlbumList from './src/components/AlbumList';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyChBm0qC1ZZrSfvIza8no02GiTb57akT30",
      authDomain: "first-reaction.firebaseapp.com",
      databaseURL: "https://first-reaction.firebaseio.com",
      projectId: "first-reaction",
      storageBucket: "first-reaction.appspot.com",
      messagingSenderId: "593263085410"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent()  {
    switch(this.state.loggedIn){
      case true:
        return (
          <View>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
            <AlbumList />
          </View>
        );
        //break;
      case false:
        return <LoginForm />;
        //break;
      default:
        return <Spinner />;
        //break;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <MyStatusBar />
        <Header headerText={'First Reaction'} />
        { this.renderContent() }
      </View>
    );
  }
}
