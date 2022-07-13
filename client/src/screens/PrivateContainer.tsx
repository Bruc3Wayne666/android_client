import React, { FC } from "react";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { Feed } from "./Feed.screen";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useActions } from "../hooks/useActions";
import { CreatePostScreen } from "./CreatePost.screen";
import { ProfileScreen } from "./Profile.screen";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../hooks/redux";
import { IUser } from "../models/IUser";


const Drawer = createDrawerNavigator();


interface DrawerMenuHeaderProps {
  user: IUser;
  handlePress: () => void;
}

const DrawerMenuHeader: FC<DrawerMenuHeaderProps> = ({ user, handlePress }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={style.drawerMenuHeader}
    >
      <Image
        style={style.drawerMenuHeaderImage}
        source={require("../assets/img.png")}
      />
      <View
        style={style.drawerMenuHeaderInfo}
      >
        {/*<Text style={style.drawerMenuHeaderInfoText}>Ayrat</Text>*/}
        <Text style={style.drawerMenuHeaderInfoText}>{user?.username}</Text>
        <Text>(Tap to see more)</Text>
      </View>
    </Pressable>
  );
};


interface DrawerMenuProps {
  user: IUser;
  handleGoToProfile: () => void;
  handleLogout: () => void;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ user, handleGoToProfile, handleLogout, ...props }) => {
  return (
    <DrawerContentScrollView
      style={style.drawerMenuBody}
    >
      <DrawerMenuHeader
        user={user}
        handlePress={handleGoToProfile}
      />
      <TouchableOpacity
        onPress={handleLogout}
        style={style.logoutItem}
      >
        <Text style={style.logoutItemText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};


export const PrivateContainer: FC<any> = () => {
  const { logout } = useActions();
  const { user } = useAppSelector(state => state.authReducer);
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
  };

  const handleGoToProfile = () => {
    navigation.navigate("Profile");
  };


  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 220 } }}
      initialRouteName={"Feed"}
      drawerContent={props => <DrawerMenu
        {...props}
        user={user}
        handleGoToProfile={handleGoToProfile}
        handleLogout={handleLogout}
      />}
    >
      <Drawer.Screen
        name={"Feed"}
        component={Feed}
      />
      {/*<Drawer.Screen*/}
      {/*  name={"CreatePost"}*/}
      {/*  component={CreatePostScreen}*/}
      {/*/>*/}
      <Drawer.Screen
        name={"Profile"}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};


const style = StyleSheet.create({
  drawerMenuBody: {
    backgroundColor: "#222",
    flex: 1,
    // position: 'relative'
    // borderWidth: 1,
    // borderColor: 'yellow'
  },
  drawerMenuHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#444",
    height: 120,
    top: 0,
    padding: 8,
    paddingLeft: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  drawerMenuHeaderImage: {
    width: 80,
    height: 80,
    borderRadius: 38,
    // flex: 1,
  },
  drawerMenuHeaderInfo: {
    flex: 1,
    alignItems: 'center',
  },
  drawerMenuHeaderInfoText: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 6,
    color: "white",
  },
  logoutItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    // bottom: 0,
    // position: 'absolute',
    marginTop: 240,
    //
    height: 46,
    margin: 18,
    borderRadius: 14,
    // position: 'absolute'
  },
  logoutItemText: {
    fontSize: 22,
    color: "red",
  },
});
