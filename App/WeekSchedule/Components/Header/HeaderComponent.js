import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import DatePickerComponent from './DatePickerComponent';

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  HeaderComponent  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
export default class HeaderComponent extends Component {

  render() {
    return (
      <View style={styles.header}>
            <Text style={styles.title}>
                Semana Nueva
            </Text>
            <DatePickerComponent></DatePickerComponent>
      </View>
  )}
}

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  StyleSheet ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  ///// VIEW //////
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  //// TEXT ///////
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});

module.export = HeaderComponent;
