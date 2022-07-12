import { ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC, useState } from "react";
import { TitleInput } from "../components/CreatePost/TitleInput";
import { Form } from "../components/CreatePost/Form";
import { PostContent } from "../components/CreatePost/PostContent";
import { PostButton } from "../components/CreatePost/PostButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { post } from "../store/reducers/post/postAction";

export const CreatePostScreen: FC<any> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(state => state.authReducer)
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')


  const cancel = () => {
    navigation.goBack();
  };

  const create = () => {
    dispatch(post({token, title, text}))
    navigation.goBack()
  }

  const handleChangeText = (text: string) => {
    setText(text)
  }

  const handleChangeTitle = (title: string) => {
    setTitle(title)
  }

  return (
    <ImageBackground source={require("../assets/createPost/background.png")} style={style.screen}>

      <Text style={style.header}>Make new post</Text>

      <Form>
        <TitleInput
          title={title}
          handleChangeTitle={handleChangeTitle}
        />
        <PostContent
          text={text}
          handleChangeText={handleChangeText}
        />
        <PostButton
          cancel={cancel}
          create={create}
        />
      </Form>

      <View
        style={style.contacts}
      >
        <Text style={style.contactsText}>GitHub: @Bruc3Wayne666</Text>
      </View>


    </ImageBackground>
  );
};

const style = StyleSheet.create({
  header: {
    fontSize: 66,
    fontWeight: "bold",
    color: "white",
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  contacts: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    bottom: 0,
  },
  contactsText: {
    color: "#777",
    bottom: 0,
  },
});
