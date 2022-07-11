import React, {FC} from "react";
import {Pressable, StyleSheet, Text} from "react-native";

interface IBtnProps {
    handlePress: () => void;
}

export const SignInBtn: FC<IBtnProps> = ({handlePress}) => {
    return (
        <Pressable
            onPress={handlePress}
            style={style.login}
        >
            <Text style={style.text}>Sign In</Text>
        </Pressable>
    )
}

export const SignIUpBtn: FC<IBtnProps> = ({handlePress}) => {
    return (
        <Pressable
            onPress={handlePress}
            style={style.register}
        >
            <Text style={style.text}>Sign Up</Text>
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