import React, { FC, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PostsContainer } from "../components/Feed/Posts.container";
import { Loading } from "../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPosts } from "../store/reducers/post/postAction";

export const Feed: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.authReducer);
  const { posts, isLoading } = useAppSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts(token));
  }, []);


  return (
    <View style={style.screen}>
      {isLoading
        ? <Loading />
        : <ScrollView>
          <PostsContainer posts={posts} />
        </ScrollView>
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
