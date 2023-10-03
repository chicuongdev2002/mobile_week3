import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient từ expo-linear-gradient

export default function Frame1a({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient // Sử dụng LinearGradient như màu nền của container
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.background}
      >
      <View style={styles.contentImage}><svg style={styles.styleImage} xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="62.5" stroke="black" strokeWidth="15" />
        </svg>
        </View>
        <View>
          <Text style={styles.styleText}>GROW{'\n'}YOUR BUSINESS</Text>
        </View>
        <View>
          <Text style={styles.styleText2}>We will help you to grow your business using {'\n'}online server</Text>
        </View>
     
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>SIGN UP</Text>
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
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop: 52,
  },
  styleText2: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop: 62,
  },
  styleImage: {
    width: 140,
    height: 140,
    flexShrink: 0,
    fill: 'rgba(196, 196, 196, 0.00)',
    strokeWidth: 15,
    stroke: '#000',
    marginTop: 105,
  },
  contentImage:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 45,
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 4,
    width: 119,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
  },
});
