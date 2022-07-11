import React, {FC, useState} from "react";
import {StyleSheet, View, Alert} from "react-native";
import {SignInBtn, SignIUpBtn} from "../components/Authorization/Auth.buttons";
import {InputContainer} from "../components/Authorization/Input.container";

export const AuthorizationScreen: FC<any> = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = async () => {
        try {
            await AsyncStorage.
            navigation.navigate('Feed')
        } catch (e) {
            Alert.alert('Loh')
        }
        // navigation.navigate('Feed')
    }

    return (
        <View style={style.screen}>
            <View style={style.form}>
                <InputContainer
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
                <View style={style.buttonContainer}>
                    <SignInBtn handlePress={handlePress}/>
                    <SignIUpBtn handlePress={handlePress}/>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    screen: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center'
    },
    form: {
        backgroundColor: '#8888',
        height: 400,
    },
    buttonContainer: {
        backgroundColor: '#444',
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flex: 1
    }
})