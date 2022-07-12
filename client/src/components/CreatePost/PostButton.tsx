import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface PostButtonProps {
  cancel: () => void;
  create: () => void;
}

export const PostButton: FC<PostButtonProps> = ({ cancel, create }) => {
  return (
    <View
      style={style.body}
    >
      <TouchableOpacity
        style={style.buttonCancel}
        onPress={cancel}
      >
        <Icon name={"trash"} size={28} color={"#888"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonPost}
        onPress={create}
      >
        <Text style={style.btnText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    paddingLeft: 22,
    paddingRight: 22,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonPost: {
    marginTop: 14,
    height: 64,
    backgroundColor: "limegreen",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "76%",
  },
  buttonCancel: {
    marginTop: 14,
    height: 64,
    backgroundColor: "red",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "18%",
  },
  btnText: {},
});
