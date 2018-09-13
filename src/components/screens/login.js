import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import config from '../../config';

export default class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };

  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }

  login() {

    fetch(config.baseUrl + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials)
    }).then((response) => response.json())
      .then(jsonResponse => {
        if (jsonResponse.confirmation === 'success') {
          console.log(this.state.credentials)
          console.log(jsonResponse)
          this.props.navigation.navigate({ routeName: 'camera', params: { user: jsonResponse.data.id } })
        } else {
          throw new Error(jsonResponse.message)
        }
      })
      .catch(err => {
        alert(JSON.stringify(err.message));
      })

  }

  render() {

    return (

      <View style={styles.container}>


        <Text>LOGIN</Text>

        <FormInput
          style={styles.input}
          placeholder={'email'}
          value={this.state.email}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'email') }}
        />
        <FormInput
          style={styles.input}
          placeholder={'password'}
          value={this.state.password}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'password') }}
          secureTextEntry
        />

        <Button title='Login' onPress={() => { this.login() }} />
        <Button title='No account? Sign up here!' onPress={() => this.props.navigation.navigate('register')} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200
  }
});

