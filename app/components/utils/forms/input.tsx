import {StyleSheet, Text, TextInput, TextInputProps, View, ViewProps} from 'react-native';
import React from 'react';
interface Props extends TextInputProps{
  type ?: string;
  overrideStyle?: ViewProps
}
const input = (props :  Props) : TextInput | any => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = <TextInput {...props}
      style = {[styles.input, props.overrideStyle]}/>;
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
