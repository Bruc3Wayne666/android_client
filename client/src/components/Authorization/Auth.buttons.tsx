import React, {FC} from "react";
import {Pressable, StyleSheet, Text} from "react-native";

interface IBtnProps {
    authType: string;
    handlePress: () => void;
}

export const SignBtn: FC<IBtnProps> = ({authType, handlePress}) => {
    return (
        <Pressable
            onPress={handlePress}
            style={authType === 'login' ? style.login : style.register}
        >
            <Text
              style={style.text}
            >
                {authType === 'login' ? 'Sign In!' : 'Sign Up now!'}
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    register: {
        backgroundColor: 'red',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        borderRadius: 8,
    },
    login: {
        backgroundColor: 'green',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        borderRadius: 8,
    },
    text: {
        fontSize: 20
    }
})
