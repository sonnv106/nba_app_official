import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Input from '../utils/forms/input';
interface Props {}
interface States {
  type?: 'Login' | 'Register';
  action: string;
  actionMode: string;
  hasErrors: boolean;
  form: any;
}
export default class authForm extends Component<Props, States> {
  state: States = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          required: true,
          isEmail: true,
        },
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          required: true,
          minLength: 6,
        },
      },
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: true,
        },
      },
    },
  };
  updateInput = (name: string, value: string) => {
    this.setState({
      hasErrors: false,
    });
    let formCopy: any = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy,
    });
  };
  confirmPassword() {
    return this.state.type != 'Login' ? (
      <Input
        placeholder="Confirm password"
        placeholderTextColor={'#CECECE'}
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput('confirmPassword', value)}
        secureTextEntry
      />
    ) : null;
  }
  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Oops, check your info</Text>
      </View>
    ) : null;
  render() {
    return (
      <View>
        <Input
          placeholder="Enter email"
          placeholderTextColor={'#CECECE'}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={value => this.updateInput('email', value)}
        />
        <Input
          placeholder="Enter password"
          placeholderTextColor={'#CECECE'}
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput('password', value)}
          secureTextEntry
        />
        {this.confirmPassword()}
        {this.formHasErrors()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#F44336',
  },
  errorLabel: {
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
