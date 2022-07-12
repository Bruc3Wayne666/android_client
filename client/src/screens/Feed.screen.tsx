import React, { FC, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PostsContainer } from "../components/Feed/Posts.container";
import { Loading } from "../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPosts, post } from "../store/reducers/post/postAction";
import { CameraButton, CreatePostButton } from "../components/Camera/CreatePost.button";

{/*<CameraButton*/}
{/*  onPress={() => {navigation.navigate('Camera')}}*/}
{/*/>*/}

export const Feed: FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.authReducer);
  const { posts, isLoading } = useAppSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts(token));
  }, [dispatch]);


  return (
    <View style={style.screen}>
      {isLoading
        ? <Loading />
        : <>
          <ScrollView>
            <PostsContainer posts={posts} />
          </ScrollView>
          <CreatePostButton onPress={() => {navigation.navigate('CreatePost')}}/>
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
