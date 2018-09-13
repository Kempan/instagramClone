import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import config from '../../config';
import Turbo from 'turbo360';


export default class CameraComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      userId: this.props.navigation.state.params.user
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {

      let photo = await this.camera.takePictureAsync();

      const turbo = Turbo({ site_id: '5b828c369dbe760014a697e4' });
      const apiKey = '40218513-e2de-4579-a1d4-17af0d966952';

      const cdnResp = await turbo.uploadFile({
        uri: photo.uri,
        name: 'camera_pic',
        type: 'image/jpeg'
      }, apiKey)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });

      // const resp = await
      //   fetch(config.baseUrl, + 'users/' + this.state.userId + '/photo', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ imageUrl: cdnResp.result.url })
      //   })

    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-start',
                  margin: 30
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 0.1, alignSelf: 'flex-end' }}
                onPress={this.snap}
              >
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default class Camera extends React.Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>CAMERA</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

