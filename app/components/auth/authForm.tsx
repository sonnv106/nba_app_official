import {Text, StyleSheet, View, Button, Platform} from 'react-native';
import React, {Component} from 'react';
import Input from '../utils/forms/input';
import validationRules from '../utils/forms/validationRules';
interface Props {
    goNext: () => void;
}
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
          isRequired: true,
          isEmail: true,
        },
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
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

    let rules = formCopy[name].rules;
    let valid  = validationRules(value, rules, formCopy)
    formCopy[name].valid = valid
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
  submitUser = () => {};
  changeFormType = () =>{
    const type = this.state.type;
    this.setState( {
        type: type === "Login" ? "Register" : "Login",
        action: type === "Login" ? "Register" : "Login",
        actionMode: type === "Login" ? "I want to login" : "I want to register"
    })
  }
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
        <View style={{marginTop: 20}}>
          <View style={styles.button}>
            <Button title={this.state.action} onPress={this.submitUser} />
          </View>
          <View style={styles.button}>
            <Button title={this.state.actionMode} onPress={this.changeFormType} />
          </View>
          <View style={styles.button}>
            <Button title={"I'll do it later"} onPress={() => this.props.goNext()} />
          </View>
        </View>
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
  button: {
    ...Platform.select({
        ios: {
            marginBottom: 0,
        },
        android: {
            marginBottom: 10,
            marginTop: 10
        }
    })
  }
});
