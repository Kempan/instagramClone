import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import config from '../../config';

export default class Post extends React.Component {

  constructor() {
    super();

    this.state = {
      isLiked: null,
      isMessage: null,
      screenWidth: Math.ceil(Dimensions.get('window').width),
      images: [
        'https://lh3.googleusercontent.com/vXx_NC3jerdj9c2zaNIRSCx0j3wDcym7SRF3rwkqXxTEMBpFfjjpJtyBDbCFW60M94wvELqadmPJDlAK4ehUZt5n',
        'https://lh3.googleusercontent.com/h_52cNhEjCkquNbgrmJ8nCT-4KxaUOICfRippvTx4hYqCf_g589uWwgCpXBw5QdhNznpA_GkmOPbH2tHgR-nfQhw',
        'https://lh3.googleusercontent.com/gKeTaztl9x0EgVC0BeGsTrU2rxgRqJZ2SAZmECxChSpGpIMHQitPMCzrlWoN91pvpQgr8-oD4iRhN3EDVHoyLOtnqYY'

      ]
    };

  }

  like() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  message() {
    this.setState({
      isMessage: !this.state.isMessage
    })
  }

  get_random = function (list) {
    return list[Math.floor((Math.random() * list.length))];
  }

  render() {

    const imageHeight = Math.floor(this.state.screenWidth * 1.1)
    const imageSelection = (this.props.item % 2 === 0) ? 'https://lh3.googleusercontent.com/vXx_NC3jerdj9c2zaNIRSCx0j3wDcym7SRF3rwkqXxTEMBpFfjjpJtyBDbCFW60M94wvELqadmPJDlAK4ehUZt5n' : 'https://lh3.googleusercontent.com/h_52cNhEjCkquNbgrmJ8nCT-4KxaUOICfRippvTx4hYqCf_g589uWwgCpXBw5QdhNznpA_GkmOPbH2tHgR-nfQhw'
    // const imageSelection = this.get_random(this.state.images);
    const imageUri = imageSelection + '=s' + imageHeight + '-c';

    const heartIconColor = (this.state.isLiked) ? 'red' : 'black';
    const bubbleColor = (this.state.isMessage) ? 'blue' : 'black';

    return (

      <View>
        <View style={styles.userBar}>

          <View style={styles.profilContainer}>
            <Image
              style={styles.profilPicture}
              source={{ uri: imageUri }}
            />
            <Text style={styles.profilName}>Joakim Edwardh</Text>
          </View>

          <View style={styles.settingDotsContainer}>
            <Text style={styles.settingDots}>...</Text>
          </View>

        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={() => { this.like() }}>
          <Image
            style={{ width: this.state.screenWidth, height: imageHeight }}
            source={{ uri: imageUri }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <TouchableOpacity onPress={() => { this.like() }}>
            <Image
              source={config.images.heartIcon}
              style={[styles.icon, { tintColor: heartIconColor, height: 40, width: 40 }]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.message() }}>
            <Image
              source={config.images.bubbleIcon}
              style={[styles.icon, { tintColor: bubbleColor, height: 34, width: 34 }]}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={config.images.arrowIcon}
              style={[styles.icon, { height: 26, width: 26 }]}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.iconBar}>
          <Image
            source={config.images.heartIcon}
            style={[styles.icon, { height: 26, width: 26, marginLeft: 5 }]}
          />
          <Text>128 Likes</Text>
        </View>

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
  },
  userBar: {
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  profilContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilName: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  profilPicture: {
    height: 36,
    width: 36,
    borderRadius: 20
  },
  settingDotsContainer: {
    alignItems: 'center'
  },
  settingDots: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    borderBottomColor: config.styleConstants.boderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 5,
    marginRight: 5
  }

});
