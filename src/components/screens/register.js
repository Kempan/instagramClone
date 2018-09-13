import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import config from '../../config';

export default class Register extends React.Component {

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

  register() {

    fetch(config.baseUrl + 'signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials)
    }).then((response) => response.json())
      .then(jsonResponse => {
        if (jsonResponse.confirmation === 'success') {
          this.props.navigation.navigate('main')
        } else {
          throw new Error({ message: 'Sorry, something went wrong. Please try again' })
        }
      })
      .catch(err => {
        alert(err.message);
      })

  }

  render() {

    return (

      <View style={styles.container}>


        <Text>REGISTER</Text>

        {/* <FormInput
          style={styles.input}
          placeholder={'Name'}
          value={this.state.name}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'name') }}
        /> */}
        <FormInput
          style={styles.input}
          placeholder={'email'}
          value={this.state.email}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'email') }}
        />
        {/* <FormInput
          style={styles.input}
          placeholder={'adress'}
          value={this.state.adress}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'adress') }}
        /> */}
        <FormInput
          style={styles.input}
          placeholder={'password'}
          value={this.state.password}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => { this.updateText(text, 'password') }}
          secureTextEntry
        />

        <Button title='register' onPress={() => { this.register() }} />

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

