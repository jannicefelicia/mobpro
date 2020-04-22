import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import Layout from './components/Layout';
import List from './components/List';

class App extends Component {
  state = {
    greeting: 'Welcome!'
  }

  render() {
    return (
      // <Layout />
      <List />
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