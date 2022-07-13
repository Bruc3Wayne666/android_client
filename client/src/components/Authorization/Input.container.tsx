import React, {FC} from "react";
import {StyleSheet, TextInput, View} from "react-native";

interface InputContainerProps {
    email: string;
    username?: string;
    password: string;
    setEmail: (v: string) => void;
    setPassword: (v: string) => void;
    setUsername?: (v: string) => void;
    authType: string;
}

export const InputContainer: FC<InputContainerProps> =
  ({email,
      password,
      username,
      setUsername,
      setEmail,
      setPassword,
      authType
  }) => {
    return authType === 'login' ? (
        <View style={style.inputContainer}>
            <TextInput
                placeholder={'EMAIL'}
                style={style.input}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder={'PASSWORD'}
                style={style.input}
                value={password}
                onChangeText={text => setPassword(text)}
            />
        </View>
    ) : (
      <View style={style.inputContainer}>
          <TextInput
            placeholder={'USERNAME'}
            style={style.input}
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            placeholder={'EMAIL'}
            style={style.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder={'PASSWORD'}
            style={style.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
      </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80%',
    },
    input: {
        backgroundColor: '#222',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 16,
        width: '80%',
        fontSize: 22,
        textAlign: 'center'
    },
})
