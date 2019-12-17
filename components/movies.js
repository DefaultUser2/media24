

import * as React from 'react';
import { Text, View, StatusBar, FlatList, FlatListItemSeparator } from 'react-native';
export default class App extends React.Component {
  state = {
    genresList: '',
    loading: "true"
  };
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0f60ad592a39d4b497a0d8889bba1be2&language=en-US', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        let test = JSON.stringify(json.genres[0]);
        console.log(test);

        let result = [];

        for(var i in json.genres)
          result.push( json.genres[i]);

          console.log("result",result);
        this.setState({
          genresList: result,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
    
      <FlatList
         data={this.state.genresList}
          renderItem={({item}) => <Text>{item.id} {item.name}</Text>}
       />
    );
  }
}
