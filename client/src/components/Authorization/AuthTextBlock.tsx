import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface AuthTextBlockProps {
  authType: string;
  changeAuthType: () => void;
}

export const AuthTextBlock: FC<AuthTextBlockProps> = ({authType, changeAuthType}) => {



  return (
    <View
      style={style.authTextBlock}
    >
      <Text
        style={style.authText}
      >
        {authType === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
      </Text>
      <Pressable
        onPress={changeAuthType}
        style={style.authTextBtn}
      >
        <Text
          style={style.authTextBtnText}
        >
          {authType === 'login' ? 'Sign Up now!' : 'Sign In!'}
        </Text>
      </Pressable>
    </View>
  )
}


const style = StyleSheet.create({
  authTextBlock: {
    marginTop: 20,
    flexDirection: 'row'
  },
  authText: {
    fontSize: 16
  },
  authTextBtn: {
    marginLeft: 8
  },
  authTextBtnText: {
    fontSize: 16,
    color: 'skyblue',
    textDecorationStyle: 'solid',
    textDecorationColor: 'skyblue',
    textDecorationLine: 'underline',
  }
})
