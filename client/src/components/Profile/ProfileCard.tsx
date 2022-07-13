import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { IPost } from "../../models/IPost";
import { PostCard } from "../Post/Post.card";
import { API_URL } from "@env";
import axios from "axios";
import { CreatePostButton } from "../CreatePost/CreatePost.button";
import { Loading } from "../Loading/Loading";


interface ProfileCardProps {
  token: string;
  user: IUser;
}

export const ProfileCard: FC<ProfileCardProps> = ({ token, user }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState();

  const fetchUsersPosts = async (token: string, user: string) => {
    const { data } = await axios.get<IPost[]>(`${API_URL}/user/${user}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsersPosts(token, user._id);
  }, []);

  return isLoading ? <Loading /> : (
    <ScrollView
      style={style.body}
    >
      <Image style={style.backImg} source={require("../../assets/img_background.png")} />
      <View style={style.infoBlock}>
        <Image style={style.profileImg} source={require("../../assets/img.png")} />
        <Text style={style.infoUsername}>{user.username}</Text>
      </View>
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: "black",
  },
  backImg: {
    height: 160,
  },
  infoBlock: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoUsername: {
    fontSize: 34,
    fontWeight: "bold",
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -50,
  },
});
