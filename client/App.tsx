/* eslint-disable quotes */
import axios from "axios";
import React, {FC, useEffect, useState} from "react";
import {Button, Image, Pressable, RefreshControl, ScrollView, Text, View} from "react-native";
import {IUser} from './src/models/IUser';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {AuthorizationScreen} from "./src/screens/Authorization.screen";
import {Feed} from "./src/screens/Feed.screen";

const Stack = createStackNavigator()

const ScreenA: FC<any> = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 56, color: 'red'}}>Hello</Text>
            {/*<Pressable onPress={() => navigation.navigate('ScreenB')}>*/}
            {/*    <Text style={{fontSize: 60, color: 'black'}}>Go to B</Text>*/}
            {/*</Pressable>*/}
            {/*<Image source={spinner}/>*/}
            {/*<Spinner />*/}
            <Button onPress={() => navigation.navigate('ScreenB')} title={'On B'}/>
        </View>
    )
}




const App: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Authorization'}>
                <Stack.Screen name={'Authorization'}
                              component={AuthorizationScreen}
                              options={{headerShown: false}}
                />
                <Stack.Screen name={'ScreenA'} component={ScreenA}/>
                <Stack.Screen name={'Feed'} component={Feed}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default App;
