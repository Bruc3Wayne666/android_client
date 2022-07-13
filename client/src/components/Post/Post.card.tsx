import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IPost } from "../../models/IPost";
import Icon from "react-native-vector-icons/AntDesign";
import CommentIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface IPostCardProps {
  handleDelete?: (v: string) => void;
  post: IPost;
}

export const PostCard: FC<IPostCardProps> = ({ handleDelete, post }) => {

  return (
    <View style={style.card}>
      <View style={style.header}>
        <View
          style={style.profileImgBlock}
        >
          <Image
            style={style.profileImg}
            source={require("../../assets/img.png")}
          />
        </View>
        <View
          style={style.titleBlock}
        >
          <Text style={style.title}>{post.title}</Text>
        </View>
        <View
          style={style.usernameBlock}
        >
          {post.author.username && <Text>By {post.author.username}</Text>}
        </View>
      </View>
      <View style={style.content}>
        <Text style={style.text}>{post.text}</Text>
      </View>
      {post.image_url && (
        <Image
          style={style.image}
          source={{ uri: post.image_url }}
        />
      )}
      <View
        style={style.buttons}
      >
        <TouchableOpacity>
          <Icon name={"hearto"} size={20} color={"red"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <CommentIcon name={"comment"} size={20} color={"#888"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {handleDelete(post._id)}}
        >
          <Icon name={"delete"} size={20} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// heart for liked

const style = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    marginBottom: 26,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  titleBlock: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 24,
  },
  profileImgBlock: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  usernameBlock: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  username: {},
  header: {
    backgroundColor: "#222",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    backgroundColor: "666",
    padding: 8,
  },
  text: {
    fontSize: 30,
  },
  image: {
    width: 400,
    height: 200,
  },
  buttons: {
    borderTopColor: "black",
    borderTopWidth: 1,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
