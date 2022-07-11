import React, { FC, useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { SignInBtn, SignIUpBtn } from "../components/Authorization/Auth.buttons";
import { InputContainer } from "../components/Authorization/Input.container";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { login } from "../store/reducers/auth/authAction";


export const AuthorizationScreen: FC<any> = () => {
  const { isLoading } = useAppSelector(state => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    console.log(email);

    try {
      dispatch(login({ email, password }));
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <View style={style.screen}>
      {isLoading && <Text style={{fontSize: 42, color: 'white'}}>Loading...</Text>}
      <View style={style.form}>
        <InputContainer
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <View style={style.buttonContainer}>
          <SignInBtn handlePress={handlePress} />
          <SignIUpBtn handlePress={handlePress} />
        </View>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#8888",
    height: 400,
  },
  buttonContainer: {
    backgroundColor: "#444",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flex: 1,
  },
});
