import React, { FC, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { InputContainer } from "../components/Authorization/Input.container";
import { useAppSelector } from "../hooks/redux";
import { AuthTextBlock } from "../components/Authorization/AuthTextBlock";
import { SignBtn } from "../components/Authorization/Auth.buttons";
import { useActions } from "../hooks/useActions";


export const AuthorizationScreen: FC<any> = () => {
  const { isLoading } = useAppSelector(state => state.authReducer);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState("login");
  const { login, register } = useActions();

  const handlePress = async () => {
    try {
      if (authType === "login") login({ email, password });
      else if (authType === "register") register({ username, email, password });
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const cleanForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  }

  const changeAuthType = () => {
    console.log(authType);
    if (authType === "login") {
      setAuthType("register");
      cleanForm()
      return;
    } else if (authType === "register") {
      setAuthType("login");
      cleanForm()
      return;
    }
  };

  return (
    <View style={style.screen}>
      {/*{isLoading && <Text style={{fontSize: 42, color: 'white'}}>Loading...</Text>}*/}
      <View style={style.form}>
        <InputContainer
          authType={authType}
          username={username}
          email={email}
          password={password}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <View style={style.buttonContainer}>
          <SignBtn
            authType={authType}
            handlePress={handlePress}
          />
          <AuthTextBlock
            authType={authType}
            changeAuthType={changeAuthType}
          />
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
    // borderColor: "white",
    // borderWidth: 1,
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
});
