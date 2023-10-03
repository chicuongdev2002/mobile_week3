import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Frame1b({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={styles.background}
      >
        <View style={styles.contentImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="117" viewBox="0 0 105 117" fill="none">
  <g clip-path="url(#clip0_6_2)">
    <path opacity="0.98" d="M52.5438 0.0380249C52.077 0.0417944 51.6099 0.0459452 51.1427 0.0613999C29.6933 0.168452 10.4489 15.0838 10.3944 31.9016C10.1517 35.8659 10.4651 39.8333 10.4093 43.7991H0.0751185C0.348828 61.2238 -0.481917 78.6892 0.511978 96.089C2.65031 107.293 15.5163 117.425 30.5197 116.88C46.9471 116.855 63.4255 117.277 79.8239 116.621C95.2178 114.547 106.028 102.186 104.861 90.2228C105.038 74.7525 104.844 59.2819 104.921 43.8132C101.492 43.7447 98.0614 43.8656 94.6321 43.7778C94.8924 34.3579 95.4589 24.0609 88.5916 15.8955C81.1651 6.20574 67.0115 -0.0323329 52.5432 0.0404176L52.5438 0.0380249ZM52.7395 13.4905C64.9263 13.621 76.967 21.513 76.616 31.4425C76.858 35.5595 77.0192 39.6787 77.1283 43.7991C60.7332 43.7916 44.3386 43.8191 27.9445 43.7754C27.9955 37.3304 25.7836 30.2834 30.2945 24.4807C34.3903 18.3323 42.5772 13.6273 51.5651 13.5021C51.9581 13.4901 52.3469 13.4859 52.7401 13.4905H52.7395Z" fill="white"/>
    <path opacity="0.98" d="M51.4831 2.29934C30.2102 2.71805 13.2506 16.258 13.2506 32.997V46.0488H2.9617V90.4341H2.97665C2.9617 90.7547 2.9617 91.0761 2.9617 91.4C2.9617 104.29 15.0376 114.665 30.0468 114.665H74.9229C89.9321 114.665 102.023 104.29 102.023 91.4C102.023 91.0762 102.008 90.7546 101.993 90.4341H102.023V46.0488H91.7494V32.997C91.7494 15.9926 74.2533 2.29934 52.5075 2.29934C52.1677 2.29934 51.8208 2.29256 51.4831 2.29934ZM51.3023 11.2518C51.5605 11.2469 51.8261 11.2518 52.0857 11.2518C64.5178 11.0247 76.7373 18.2166 79.2763 27.7665C79.7086 33.8602 79.952 39.949 80.0898 46.0484H24.9864C24.9734 43.1319 24.9561 40.2223 24.8811 37.3078C21.7343 24.8365 35.0403 11.5503 51.3033 11.2514L51.3023 11.2518ZM52.4472 62.2827C53.0338 62.2827 53.6269 62.3185 54.2248 62.3887C60.6023 63.1368 65.0035 67.7794 64.0466 72.7664C63.6061 75.0627 62.0912 77.0387 59.9793 78.4206L64.0617 98.4341H40.9232L44.9905 78.4206C41.9818 76.4447 40.3127 73.3182 40.9382 70.0569C41.8053 65.5373 46.7768 62.2944 52.4472 62.2824V62.2827Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_6_2">
      <rect width="105" height="117" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </View>
        <View>
          <Text style={styles.styleText}>FORGET{'\n'}PASSWORD</Text>
        </View>
        <View>
          <Text style={styles.styleText2}>Provide your account’s email for {'\n'}which you want to reset your password</Text>
        </View>
        <View style={styles.inputContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 48 45" fill="none">
  <g clip-path="url(#clip0_7_7)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V45H0V0Z" fill="#C4C4C4"/>
    <path d="M13.3334 14.6653H34.6667C34.9134 14.6653 35.1129 14.8524 35.1129 15.0787V29.9213C35.1129 30.1476 34.9134 30.3346 34.6667 30.3346H13.3334C13.0867 30.3346 12.8872 30.1476 12.8872 29.9213V15.0787C12.8872 14.8524 13.0867 14.6653 13.3334 14.6653ZM34.2205 15.497H13.7796V29.5029H34.2205V15.497Z" fill="#011627"/>
    <path d="M13.0184 15.374C12.8452 15.2116 12.8452 14.9508 13.0184 14.7884C13.1916 14.626 13.4698 14.626 13.6483 14.7835L24.315 24.7835C24.4882 24.9459 24.4882 25.2067 24.315 25.3691C24.1418 25.5315 23.8635 25.5315 23.6851 25.374L13.0184 15.374Z" fill="#011627"/>
    <path d="M34.3517 14.7835C34.5302 14.626 34.8084 14.626 34.9817 14.7884C35.1549 14.9508 35.1549 15.2116 34.9817 15.374L24.315 25.374C24.1418 25.5315 23.8583 25.5315 23.6851 25.3691C23.5118 25.2067 23.5118 24.9459 23.6903 24.7835L34.3517 14.7835Z" fill="#011627"/>
  </g>
  <defs>
    <clipPath id="clip0_7_7">
      <rect width="48" height="45" fill="white"/>
    </clipPath>
  </defs>
</svg>
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('NEXT')}
          >
            <Text style={styles.buttonText}>NEXT</Text>
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
  contentImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Thay đổi khoảng cách từ TextInput đến nút NEXT
  },
  input: {
    width: "80%", // Thay đổi chiều rộng của TextInput
    paddingLeft: 48,
    height: 45,
    backgroundColor: "#C4C4C4",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
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
