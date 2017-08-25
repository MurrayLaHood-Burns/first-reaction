// @flow
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};
  
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((err) => {
        console.log('sign in failed, creating user...' + err.message);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this, err));
      });
  }

  onLoginFail(err) {
    console.log('create user failed' + err.message);
    this.setState({error: err.message, loading: false });
    
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '', // uneccessary
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small'/>
    }
    
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@email.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.error}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
