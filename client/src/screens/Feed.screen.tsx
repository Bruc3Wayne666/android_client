import React, { FC, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PostsContainer } from "../components/Feed/Posts.container";
import { Loading } from "../components/Loading/Loading";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";
import { CreatePostButton } from "../components/CreatePost/CreatePost.button";


export const Feed: FC<any> = ({ navigation }) => {
  const { fetchPosts } = useActions();
  const { token } = useAppSelector(state => state.authReducer);
  const { posts, isLoading } = useAppSelector(state => state.postReducer);

  useEffect(() => {
    fetchPosts(token);
  }, []);


  return (
    <View style={style.screen}>
      {isLoading
        ? <Loading />
        : <>
          <ScrollView>
            <PostsContainer posts={posts} />
          </ScrollView>
          <CreatePostButton onPress={() => {
            navigation.navigate("CreatePost");
          }} />
        </>
      }
    </View>
  );
};


const style = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
  },
});
