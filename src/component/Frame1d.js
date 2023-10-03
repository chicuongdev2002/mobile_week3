import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';//Icon cho mật khẩu
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function Frame1d({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây, ví dụ kiểm tra email và mật khẩu
    if (email === 'chicuong11042002@gmail.com' && password === '123123123') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    }
  };

  // Xử lí hiện/mật khẩu
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
           <View style={styles.containerTextCode}>
          <Text style={styles.styleTextCode}>LOGIN</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisibility}
        >
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={30} color="#0C8A7B" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("dangnhap")}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>
        <View style={styles.styleText}>
        <Text style={styles.socialLogin}>When you agree to terms and conditions</Text>
        </View>
        <View style={styles.styleText}>
        <Text style={styles.forgotPassword}>For got your password?</Text>
        </View>
        <View style={styles.styleText}>
        <Text style={styles.forgotPassword}>Or Login With</Text>
        </View>
        <View style={styles.styleLogin}>
  <TouchableOpacity>
    <FontAwesomeIcon name="facebook" size={24} color="blue" />
  </TouchableOpacity>
  <TouchableOpacity>
    <IoniconsIcon name="logo-google" size={24} color="red" />
  </TouchableOpacity>
  <TouchableOpacity>
    <EntypoIcon name="old-phone" size={24} color="green" />
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(49, 170, 82, 0.19)',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 45,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#CC0000',
    borderRadius: 4,
    width: 339,
    height: 50,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 16,
  },
  socialLogin: {
    fontSize: 16,
    textAlign: 'center',
  },
styleText:{
    marginTop:20,
},
styleTextCode:{
    marginBottom:100,
    fontSize:40,
    fontWeight:'roboto',
    textAlign:'center',
    color:'#000',
},
styleLogin:{
  
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',//căn giữa các ô theo chiều ngang
},
});
