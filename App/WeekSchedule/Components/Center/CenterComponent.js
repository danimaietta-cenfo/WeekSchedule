import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  ListView,
  TextInput,
} from 'react-native';
import FoodTimeComponet from './FoodTimeComponent';

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////   CenterComponent  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
let list = [null];
/////////////////////////////////////////////////////////////////////////////////
export default class CenterComponent extends Component {

  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(list)
      };
   }

  addSchedule(){
    list.push(<FoodTimeComponet />)
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(list)
    });
  }

  render() {
    return (
      <ScrollView style={styles.center}>
            <TouchableHighlight onPress={this.addSchedule.bind(this)}>
                <Text style={styles.addFoodTitle}>
                    ( + )  Tiempo de Comida
                </Text>
            </TouchableHighlight>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <FoodTimeComponet>{rowData}</FoodTimeComponet>}
            />
      </ScrollView>
  )}
}


/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////  StyleSheet ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  ///// VIEW //////
  center: {
    flexDirection: 'column',
  },
  //// TEXT ///////
  addFoodTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
  },
});

module.export = CenterComponent;
