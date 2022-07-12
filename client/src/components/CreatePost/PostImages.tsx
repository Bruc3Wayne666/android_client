import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const PostImages: FC<any> = () => {
  return (
    <View
      style={style.body}
    >
      <View
        style={style.block}
      >
        <Text
          style={style.images}
        >
          Add images (will be soon)
        </Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  body: {
    marginTop: -20,
    backgroundColor: '#444',
    height: 140,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 32
  },
  block: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 16,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  images: {

  }
})
