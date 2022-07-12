import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";


interface PostTextProps {
  text: string;
  handleChangeText: (v: string) => void;
}

export const PostText: FC<PostTextProps> = ({text, handleChangeText}) => {

  return (
    <View
      style={style.body}
    >
      <ScrollView
        style={style.textArea}
      >
        <TextInput
          style={style.text}
          multiline={true}
          placeholder={'Type your history...'}
          onChangeText={value => {handleChangeText(value)}}
          value={text}
        />
      </ScrollView>
    </View>
  )
}


const style = StyleSheet.create({
  body: {
    borderRadius: 8,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: "#222",
    paddingBottom: 10,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 20,
  },
  textArea: {
    minHeight: 100,
    maxHeight: 200,
  }
});
