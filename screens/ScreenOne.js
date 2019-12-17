import React from 'react';
import { View, StyleSheet, Text, Component, FlatList, Button } from 'react-native';

import ListCat from '../components/category';

import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
  <Ionicons
    name={'md-list'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class ScreenOne extends React.Component {



  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.twoFlex}>
          <Text> Category List2 </Text>
          <Button
  title="Go to Details"
  onPress={() => this.props.navigation.navigate('Movies')}
/>
        </View>
        <View style={styles.threeFlex}>
       <ListCat/>

           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  twoFlex: {
    flex:1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  threeFlex:{
  flex:3,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
},
});
