import React from 'react';
import { View, StyleSheet, Text, Component, FlatList, Button } from 'react-native';

import ListCat from '../components/category';



export default class ScreenMovies extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.twoFlex}>
          <Text> MOVIE LIST BASED ON CATEGORY </Text>


        </View>
        <View style={styles.threeFlex}>


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
