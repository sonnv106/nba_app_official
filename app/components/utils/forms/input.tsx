import {StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewProps} from 'react-native';
import React from 'react';
interface Props extends TextInputProps{
  type ?: string;
  overrideStyle?: ViewProps,
  overrideTextStyle?: TextStyle
}
const input = (props :  Props) : TextInput | any => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = <TextInput {...props}
      style = {[styles.input, props.overrideStyle, props.overrideTextStyle]}/>;
      break;
    default:
      return template;
  }
  return template;
};

export default input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#EAEAEA',
    fontSize: 16,
    padding: 5,
    marginTop: 10,
  }
});
