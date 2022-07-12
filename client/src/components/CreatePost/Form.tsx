import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const Form: FC<any> = ({children}) => {
  return (
    <View style={style.form}>
      {children}
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    marginTop: 10,
    backgroundColor: "#111",
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 18,
  },
})
