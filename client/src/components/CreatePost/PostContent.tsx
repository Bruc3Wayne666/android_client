import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { FC } from "react";
import { PostText } from "./PostText";
import { PostImages } from "./PostImages";


// In nearest future: add photos to post

interface PostContentProps {
  text: string;
  handleChangeText: (v: string) => void;
}

export const PostContent: FC<PostContentProps> = ({text, handleChangeText}) => {


  return (
    <View
      style={style.body}
    >
      <Text style={style.title}>Text</Text>
      <PostText
        text={text}
        handleChangeText={handleChangeText}
      />
      <PostImages />

    </View>
  );
};


const style = StyleSheet.create({
  body: {
    marginTop: 24,
    paddingLeft: 22,
    paddingRight: 22,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
});
