import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Calculator from '../components/Calculator';

const CalculatorScreen = () => {


  const [firstint, first] = useState('');
  const [secondint, second] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0)


  validate = (firstint, secondint, operator) => {
    let value
    let regex = /^([+-]?[1-9]\d*\.?\d*|0)$/
    console.log(firstint);
    console.log(secondint);
    if (regex.test(firstint) === true) {
      if (regex.test(secondint) === true) {
        if (operator === "+") {
          let value = parseFloat(firstint) + parseFloat(secondint)
          return value
        } else if (operator === "-") {
          let value = parseFloat(firstint) - parseFloat(secondint)
          return value
        } else if (operator === "*") {
          let value = parseFloat(firstint) * parseFloat(secondint)
          return value
        } else if (operator === "/") {
          let value = parseFloat(firstint) / parseFloat(secondint)
          return value
        }
      } else {
        Alert.alert("Error Input", "Please Enter a valid Integer");
      }
    } else {
      Alert.alert("Error Input", "Please Enter a valid Integer");
    }
  }

  return (

    <View style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={{width: 400, height: 50, backgroundColor: 'gray', marginTop: 20,  justifyContent: 'flex-end'}}>
          <Text style={{alignSelf: 'flex-end', marginRight: 7, fontSize: 40}}>
            {result}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text style={styles.textSpace}>First Integer</Text>
          <Text style={styles.textSpace}>Second Integer</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}} >
          <TextInput
            value={firstint}
            style={{ height: 30, width: 100, borderColor: 'gray', borderWidth: 3, color: 'gray', paddingLeft: 10 }}
            onChangeText={value => first(value)}
            keyboardType="numeric"
          />
          <Text style={styles.textOperator}>{"    "}{operator}{"    "}</Text>
          <TextInput
            value={secondint}
            style={{ height: 30, width: 100, borderColor: 'gray', borderWidth: 3, color: 'gray', paddingLeft: 10 }}
            onChangeText={value => second(value)}
            keyboardType="numeric"
          /> 
        </View>
        <View style={{flexDirection: 'row', justifyContent: "center"}}>
          <Calculator name="plus" onPress={() => { setOperator('+'); }}></Calculator>
          <Calculator name="minus" onPress={() => { setOperator('-'); }}></Calculator>
          <Calculator name="times" onPress={() => { setOperator('*'); }}></Calculator>
          <Calculator name="divide" onPress={() => { setOperator('/'); }}></Calculator>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "center"}}>

          <TouchableOpacity
            onPress={() => {
              setOperator('')
              first('')
              second('')
              setResult('')
            }}
            style={styles.buttonX}
          ><Text style={styles.textSpace2}>Clear</Text>
          </TouchableOpacity>

          <Text>{"        "}</Text>
          <TouchableOpacity
            onPress={() => {
              setResult(validate(firstint, secondint, operator));
            }}
            style={styles.buttonX}
          ><Text style={styles.textSpace2}>=</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#372E2C',
    color: 'white'
  },

  container2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#372E2C',
    color: 'white'
  },

  container3: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#372E2C',
    color: 'white'
  },

  textSpace: {
    paddingLeft: 10,
    color: 'white'
  },
  textSpace2: {
    color: 'white'
  },
  textOperator: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  iconSpace: {
    justifyContent: 'center',
  },

  buttonX: {
    marginBottom: 50,
    marginTop: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingLeft: 5,
    width: 60,
  }
});

export default CalculatorScreen;

