// now only user's own profile


import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ProfileCard } from "../components/Profile/ProfileCard";
import { useAppSelector } from "../hooks/redux";
import { CreatePostButton } from "../components/CreatePost/CreatePost.button";

export const ProfileScreen: FC<any> = ({navigation}) => {
  const { user, token } = useAppSelector(state => state.authReducer);

  return (
    <View
      style={style.screen}
    >
      <ProfileCard
        user={user}
        token={token}
      />
      <CreatePostButton onPress={() => {
        navigation.navigate("CreatePost");
      }}/>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1
  },
});
