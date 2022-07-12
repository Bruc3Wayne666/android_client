import React, { FC } from "react";
import { Text, TextInput } from "react-native";

export const TitleInput: FC = () => {
  return (
    <View>
    <Text>Title</Text>
    <TextInput
  multiline={true}
  />
  </View>
  )
}
