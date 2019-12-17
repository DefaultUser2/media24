import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const BottomTabNavigator = createBottomTabNavigator({
  One: ScreenOne,
  Two: ScreenTwo,
  Three: ScreenThree
}, {
  tabBarOptions: {
    showLabel: false
  }
});

export default BottomTabNavigator;
