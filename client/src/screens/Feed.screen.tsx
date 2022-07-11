import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {ScrollView, StyleSheet, View} from "react-native";
import { PostsContainer } from "../components/Feed/Posts.container";
import {Loading} from "../components/Loading/Loading";
import {IPost} from "../models/IPost";

export const Feed: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            const fetchPosts = async () => {
                const {data} = await axios.get<IPost[]>('http://192.168.1.87:5000/api/post', {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsc3BlYzM2QGdtYWlsLmNvbSIsImlkIjoiNjJjYTI0ZjMzNjgwMGM1ODczMmM4OTFhIiwidXNlcm5hbWUiOiJjbGFyayIsImlhdCI6MTY1NzUwNzkxNSwiZXhwIjoxNjU3NTExNTE1fQ.Yc-3IGC39oNlp63dh-85yeiyrf4UG05N-Eqs7KZUuTY'
                    }
                })
                setPosts(data)
            };
            fetchPosts()
            setIsLoading(false)
        }, 2000)
    }, [])


    return (
        <View style={style.screen}>
            {isLoading && <Loading/>}
            <ScrollView>
                <PostsContainer posts={posts}/>
            </ScrollView>
        </View>
    );
}


const style = StyleSheet.create({
    screen: {
        backgroundColor: 'black',
        flex: 1
    }
})