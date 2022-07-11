import React, { FC } from "react";
import { AuthorizationScreen } from "./Authorization.screen";
import { Feed } from "./Feed.screen";
import { useAppSelector } from "../hooks/redux";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


export const MainContainer: FC<any> = () => {
  const { token } = useAppSelector(state => state.authReducer);

  return token ? (
    <Stack.Navigator initialRouteName={"Authorization"}>
      <Stack.Screen name={"Feed"} component={Feed} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name={"Authorization"}
                    component={AuthorizationScreen}
                    options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
