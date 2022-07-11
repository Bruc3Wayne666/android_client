import React, {FC} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {IPost} from "../../models/IPost";

interface IPostCardProps {
    post: IPost;
}

export const PostCard: FC<IPostCardProps> = ({post}) => {

    return (
        <View style={style.card}>
            <View style={style.header}>
                <Image style={{width: 42, height: 42}} source={require('../../assets/img.png')}/>
                <Text style={style.title}>{post.title}</Text>
                <Text>By {post.author.username}</Text>
            </View>
            <View style={style.content}>
                <Text style={style.text}>{post.text}</Text>
            </View>
            {post.image_url && (
                <Image
                    style={style.image}
                    source={{uri: post.image_url}}
                />
            )}
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#222',
        marginBottom: 30
    },
    title: {
        fontSize: 24,
    },
    header: {
        borderWidth: 1,
        borderColor: 'white',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    content: {
        backgroundColor: '666'
    },
    text: {
        fontSize: 30
    },
    image: {
        width: 400,
        height: 200
    }
})