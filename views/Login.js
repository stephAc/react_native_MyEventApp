import React, { Component, createRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import tcomb from 'tcomb-form-native';

// Initialisation
const Form = tcomb.form.Form;

// Model
const LoginModel = tcomb.struct({
  email: tcomb.String,
  password: tcomb.String,
});

// Option
const options = {
  fields: {
    email: {
      label: 'Mon email',
    },
    password: {
      label: 'Mot de passe',
    },
  },
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.state = {
      email: null,
      password: null,
    };
  }
  connect() {
    let validate = this.refs.form.validate();
    console.log(validate);

    // let { email, password } = this.state;
    // console.log(email, password);
    // if (email !== null && password !== null) {
    //   this.props.navigation.navigate('Home');
    // }
  }
  handleChange(e, name) {
    console.log(name);
    this.setState({ [name]: e.nativeEvent.text });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TextInput
          refs={this.emailRef}
          style={styles.input}
          placeholder={'Entrer votre email...'}
          onChange={(e) => this.handleChange(e, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder={'Entrer votre mot de passe...'}
          secureTextEntry={true}
          onChange={(e) => this.handleChange(e, 'password')}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'red', width: '100%', textAlign: 'center' }}
          onPress={() => this.connect()}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>
            Se connecter
          </Text>
        </TouchableOpacity> */}

        <Form ref="form" type={LoginModel} options={options} />

        <Button title="Se connecter" onPress={() => this.connect()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
