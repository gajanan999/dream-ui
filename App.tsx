import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class App extends Component {
  username:any
  password:any
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    Alert.alert('Credentials', `${this.username} + ${this.password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
          value={this.username}
          onChangeText={(username) => {this.username=username}}
          placeholder={'Email'}
          style={styles.input}
        />  
         <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>      
        <Button
          title={'Login'}
          onPress={this.onLogin.bind(this)}
        />
         </TouchableHighlight>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  loginbtn:{
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius:10
  },
});
