import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  FooterComponent  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
export default class FooterComponent extends Component {

  cancel(){
    alert("You tapped the addSchedule");
  }
  agree(){
    alert("You tapped the addSchedule");
  }

  render() {
    return (
      <View style={styles.footer}>
          <TouchableHighlight onPress={this.agree}>
          <Text style={styles.button}>
              Aceptar
          </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.cancel}>
          <Text style={styles.button}>
              Rechazar
          </Text>
          </TouchableHighlight>
      </View>
  )}
}

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  StyleSheet ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  ///// VIEW //////
  footer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //// TEXT ///////
  button: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 50,
    margin: 20,
  },
});

module.export = FooterComponent;
