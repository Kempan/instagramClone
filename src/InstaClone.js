import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { MainFeed, Login, Profile, CameraComponent, Register } from './components/screens';

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: CameraComponent,
  profil: Profile
})

const IntroStack = createStackNavigator({
  login: Login,
  register: Register,
})

const MainStack = createSwitchNavigator({
  intro: IntroStack,
  main: Tabs,
})


export default class InstaClone extends React.Component {

  render() {
    return (
      <MainStack />
    );
  }
}

