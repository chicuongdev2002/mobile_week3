import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Frame1c({ navigation }) {
  const [email, setEmail] = useState(''); // State để lưu trữ giá trị email
  const [verificationCode, setVerificationCode] = useState(''); // State để lưu trữ giá trị mã xác minh
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  const handleVerifyCode = () => {
    // Xử lý logic xác minh mã số ở đây
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.background}
      >
        <View style={styles.containerText}>
          <Text style={styles.styleText}>CODE</Text>
        </View>
        <View>
          <Text style={styles.styleText2}>VERIFICATION</Text>
        </View>
        <View>
          <Text style={styles.styleText3}>
            Enter one-time code sent on ++849092605798
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {/* Các ô nhập cho mã số */}
          <View style={styles.codeInputContainer}>
            <TextInput
              style={styles.codeInput}
              value={input1}
              onChangeText={(text) => setInput1(text)}
              maxLength={1}
            />
            <TextInput
              style={styles.codeInput}
              value={input2}
              onChangeText={(text) => setInput2(text)}
              maxLength={1}
            />
            <TextInput
              style={styles.codeInput}
              value={input3}
              onChangeText={(text) => setInput3(text)}
              maxLength={1}
            />
            <TextInput
              style={styles.codeInput}
              value={input4}
              onChangeText={(text) => setInput4(text)}
              maxLength={1}
            />
            <TextInput
              style={styles.codeInput}
              value={input5}
              onChangeText={(text) => setInput5(text)}
              maxLength={1}
            />
            <TextInput
              style={styles.codeInput}
              value={input6}
              onChangeText={(text) => setInput6(text)}
              maxLength={1}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("VERIFYCODE")}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  styleText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 60,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop: 113,
  },
  styleText2: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop: 62,
  },
  styleText3: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop: 22,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 24,
    width: '90%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',//căn giữa các ô theo chiều ngang
  },
  codeInput: {
    flex: 1,
    height: 50,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 45,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 4,
    width: 339,
    height: 50,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
  },
});
