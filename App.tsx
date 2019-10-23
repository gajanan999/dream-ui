import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class App extends Component {
  emailOrMobileNo:any
  inp:any
  constructor(props) {
    super(props);
    
    this.state = {
      emailOrMobileNo: '',
      password: '',
    };
  }

  handlePress = async () => {
    
    if(this.emailOrMobileNo.includes('@')){
      this.inp="emailAddress"
    }else{
      this.inp="mobileNumber"
    }

  //   fetch('http://localhost:8080/users/exists?'+this.inp+'='+this.emailOrMobileNo, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //           "type": "select",
  //     "args": {
  //         "table": "author",
  //         "columns": [
  //             "name"
  //         ],
  //         "limit": "1"
  //     }
  //       })
  // })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //  Alert.alert("Author name at 0th index:  " + responseJson[0].name);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

    try {
      // let response = await fetch('http://localhost:8080/users/exists?emailAddress=gajanangaikwad999@gmail.com');
      // Alert.alert(response.json()+ 'Login Successfull');
      // let responseJson =  response.json;
      // if(responseJson != undefined && null != responseJson.exists){
      //   Alert.alert(responseJson+ 'Login Successfull');
      // }else{
      //   Alert.alert(responseJson+ 'Login Failed');
      // }
    } catch (error) {
      Alert.alert(error);
      console.error(error);
    }

  }
  
  onLogin() {


    Alert.alert('Credentials', `${this.emailOrMobileNo}`);
  }


  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
          value={this.emailOrMobileNo}
          onChangeText={(emailOrMobileNo) => {this.emailOrMobileNo=emailOrMobileNo}}
          placeholder={'Enter Email Or Mobile Number'}
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
          onPress={this.handlePress.bind(this)}
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
