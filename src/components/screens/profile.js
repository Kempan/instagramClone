import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Profile extends React.Component {

  login() {
    this.props.navigation.navigate('login')
  }

  render() {

    return (

      <View style={styles.container}>

        <TouchableOpacity onPress={() => { this.login() }}>
          <Text>PROFILE</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

