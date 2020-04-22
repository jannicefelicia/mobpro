import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import Layout from './components/Layout';

class App extends Component {
  state = {
    greeting: 'Welcome!'
  }

  render() {
    return (
      <Layout />
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