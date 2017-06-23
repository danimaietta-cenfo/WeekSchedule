import React, { Component } from 'react';
import {WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'
import ModalDropdown from 'react-native-modal-dropdown';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

export default class FoodTimeComponet extends Component {

  constructor(props) {
      super(props);
      this.state = { text: 'Nuevo Tiempo de Comida',
                      now: new Date(),
                      minutesArray: ['00', '15', '30', '45'],
                    };
  }

  method(){

  }

  onTimeSelected(date){

  }

  render() {
    return (
      <View style={styles.foodTimeSeparator}>
          <View style={styles.foodTimeInLine}>
              <Text style={styles.redX}>
                  X
              </Text>
              <TouchableHighlight>
                  <TextInput
                        style={{height: 40, width: 250}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                  />
              </TouchableHighlight>
              <TimePicker
                  minutes={this.state.minutesArray}
   	              onTimeSelected={(date)=>this.onTimeSelected(date)}
                  initDate={this.state.now.toISOString()}
              />
          </View>
          <View>
              {/*<TouchableHighlight onPress={this.method()}>
                  <Text style={styles.foodTime}>
                      ( v )  alimento
                  </Text>
              </TouchableHighlight>*/}
              <ModalDropdown
                  defaultValue={"( v )  alimento"}
                  options={['Almidones', 'Proteínas', 'Vegetales', 'Frutas', 'Lácteos', 'Grasas', 'Azúcares']}
                  textStyle={styles.foodTime}
                  dropdownStyle={styles.dropdown}
                  />
          </View>
      </View>
  )}
}

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  StyleSheet ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  ///// VIEW //////
  foodTimeSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  foodTimeInLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //// TEXT ///////
  foodTime: {
    fontSize: 25,
    paddingLeft: 20,
    padding: 5,
  },
  redX: {
    color: '#FF001E',
    padding: 20,
  },
  dropdown: {
    fontSize: 20,
    paddingLeft: 20,
    padding: 5,
  },
});

module.export = FoodTimeComponet;
