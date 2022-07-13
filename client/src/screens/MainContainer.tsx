import React, { FC } from "react";
import { AuthorizationScreen } from "./Authorization.screen";
import { Feed } from "./Feed.screen";
import { useAppSelector } from "../hooks/redux";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostScreen } from "./CreatePost.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PrivateContainer } from "./PrivateContainer";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


export const MainContainer: FC<any> = () => {
  const { token } = useAppSelector(state => state.authReducer);

  return token ? (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MainContainer'}
    >
      <Stack.Screen
        name={'PrivateContainer'}
        component={PrivateContainer}
      />
      <Stack.Screen
        name={"CreatePost"}
        component={CreatePostScreen}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name={"Authorization"}
        component={AuthorizationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  // return token ? (
  //   <Stack.Navigator
  //     initialRouteName={"Authorization"}
  //   >
  //     <Stack.Screen
  //       name={"Feed"}
  //       component={Feed}
  //       options={{ headerShown: false }}
  //     />
  //     <Stack.Screen
  //       name={"CreatePost"}
  //       component={CreatePostScreen}
  //       options={{ headerShown: false }}
  //     />
  //   </Stack.Navigator>
  // ) : (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name={"Authorization"}
  //       component={AuthorizationScreen}
  //       options={{ headerShown: false }}
  //     />
  //   </Stack.Navigator>
  // );
};
