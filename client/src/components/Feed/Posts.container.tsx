import {FC} from "react";
import {View} from "react-native";
import {PostCard} from "../Post/Post.card";
import React from "react";
import {IPost} from "../../models/IPost";

interface IPostsContainerProps {
    posts: IPost[];
}

export const PostsContainer: FC<IPostsContainerProps> = ({posts}) => {

    return (
        <View>
            {posts.map(post => (
                <PostCard key={post._id} post={post} />
            ))}
        </View>
    )
}
