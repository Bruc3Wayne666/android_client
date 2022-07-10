/* eslint-disable quotes */
import axios from "axios";
import React, {FC, useEffect, useState} from "react";
import {Image, Pressable, RefreshControl, ScrollView, Text, View} from "react-native";
import {IUser} from './src/models/IUser';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator()

const ScreenA: FC = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 56, color: 'red'}}>Hello</Text>
            <Pressable onPress={() => navigation.navigate('ScreenB')}>
                <Text style={{fontSize: 60, color: 'black'}}>Go to B</Text>
            </Pressable>
        </View>
    )
}

const ScreenB: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        setIsRefreshing(true)
        const fetchUsers = async () => {
            const {data} = await axios.get<IUser[]>('https://nest1hosting.herokuapp.com/api/user')
            setUsers(data)
        };
        fetchUsers()
        setIsRefreshing(false)
    }, [])

    return (
        <View>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isRefreshing}/>
                }
            >
                {users.map(user => (
                    <View>
                        <Text style={{color: 'white', fontSize: 32}} key={user._id}>{user.username}</Text>
                        {user.posts.map(post => (
                            <Image key={post._id} style={{width: 400, height: 200}} source={{uri: post.image_url}}/>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}


const App: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'ScreenA'} component={ScreenA}/>
                <Stack.Screen name={'ScreenB'} component={ScreenB}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default App;
