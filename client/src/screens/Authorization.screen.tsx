import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View, Alert, Text, ImageBackground } from "react-native";
import { InputContainer } from "../components/Authorization/Input.container";
import { useAppSelector } from "../hooks/redux";
import { AuthTextBlock } from "../components/Authorization/AuthTextBlock";
import { SignBtn } from "../components/Authorization/Auth.buttons";
import { useActions } from "../hooks/useActions";
import Icon from "react-native-vector-icons/AntDesign";
import { Loading } from "../components/Loading/Loading";
import Sound from "react-native-sound";
import sound  from "../assets/sounds/auth.mp3"


Sound.setCategory('Playback');

const ding = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export const AuthorizationScreen: FC<any> = () => {
  const { isLoading } = useAppSelector(state => state.authReducer);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState("login");
  const { login, register } = useActions();

  useEffect(() => {
    ding.setVolume(0.5);
    return () => {
      ding.release();
    };
  }, [])


  const playPause = () => {
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };


  const handlePress = async () => {
    try {
      if (authType === "login") login({ email, password });
      else if (authType === "register") register({ username, email, password });
      playPause()
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const cleanForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const changeAuthType = () => {
    if (authType === "login") {
      setAuthType("register");
      cleanForm();
      return;
    } else if (authType === "register") {
      setAuthType("login");
      cleanForm();
      return;
    }
  };

  return isLoading ? <Loading action={"Process of authorizing"} /> : (
    <ImageBackground source={require("../assets/authbg.png")} style={style.screen}>
      <Text style={style.title}>{authType === "login" ? "Sign In" : "Sign Up"} now</Text>
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

      <View
        style={style.contacts}
      >
        <Text style={style.contactsText}><Icon name={"github"} size={20} /> @Bruc3Wayne666</Text>
      </View>
    </ImageBackground>
  );
};


const style = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    top: -60,
    fontSize: 94,
    color: "white",
    fontWeight: "bold",
  },
  form: {
    height: 400,
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  contacts: {
    justifyContent: "center",
    alignItems: "center",
    bottom: -93,
  },
  contactsText: {
    color: "#777",
    bottom: 0,
  },
});


