import React, { FC } from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-spinkit";

export const Loading: FC<{action: string}> = ({action}) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spinner
        isVisible={true}
        color={"green"}
        size={60}
        type={"ThreeBounce"}
      />
      <Text>{action}</Text>
    </View>
  );
};
