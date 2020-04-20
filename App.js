import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';

class App extends Component {
  state = {
    greeting: 'Welcome!'
  }

  render() {
    return (
      <View style={styles.container}>
        <Greeting text={this.state.greeting} />
        <Text>{this.state.greeting}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3BC9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;