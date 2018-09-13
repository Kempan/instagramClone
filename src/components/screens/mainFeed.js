import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import config from '../../config';
import PostFeed from '../../components/container/postFeed';

export default class MainFeed extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    height: 50,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: config.styleConstants.boderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

