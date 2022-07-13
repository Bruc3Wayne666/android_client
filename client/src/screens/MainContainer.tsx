import React, { FC } from "react";
import { AuthorizationScreen } from "./Authorization.screen";
import { Feed } from "./Feed.screen";
import { useAppSelector } from "../hooks/redux";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostScreen } from "./CreatePost.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


export const MainContainer: FC<any> = () => {
  const { token } = useAppSelector(state => state.authReducer);

  // return token ? (
  //   <Stack.Navigator
  //     initialRouteName={"Private"}
  //   >
  //     <Stack.Screen name={'Private'}>
  //       <Drawer.Navigator
  //         initialRouteName={'Feed'}
  //       >
  //         <Drawer.Screen
  //           name={"Feed"}
  //           component={Feed}
  //           options={{ headerShown: false }}
  //         />
  //         <Drawer.Screen
  //           name={"CreatePost"}
  //           component={CreatePostScreen}
  //           options={{ headerShown: false }}
  //         />
  //       </Drawer.Navigator>
  //     </Stack.Screen>
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

  return token ? (
    <Stack.Navigator
      initialRouteName={"Authorization"}
    >
      <Stack.Screen
        name={"Feed"}
        component={Feed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CreatePost"}
        component={CreatePostScreen}
        options={{ headerShown: false }}
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
};
