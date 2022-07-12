import React, { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


interface TitleInputProps {
  title: string;
  handleChangeTitle: (v: string) => void;
}


export const TitleInput: FC<TitleInputProps> = ({title, handleChangeTitle}) => {

  return (
    <View style={style.block}>
      <Text style={style.title}>Title</Text>
      <TextInput
        style={style.input}
        multiline={true}
        placeholder={"Type title here..."}
        onChangeText={value => {handleChangeTitle(value)}}
        value={title}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 4,
  },
  block: {
    paddingLeft: 22,
    paddingRight: 22,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 8,
    fontSize: 22,
  },
});
