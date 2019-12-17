import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
import ScreenMovies from '../screens/ScreenMovies';

export default createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigator,
    Movies: ScreenMovies

  })
);
