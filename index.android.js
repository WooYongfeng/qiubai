/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import API from './api/API';

import QiubaiView from './qiubai_component/QiubaiView';

export default class qiubai extends Component {
  render() {
    return (
      <View style={styles.container}>
       <QiubaiView/>
      </View>
    );
  }

  componentDidMount(){
    // console.log(API);
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('qiubai', () => qiubai);
