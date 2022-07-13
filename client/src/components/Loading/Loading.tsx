import {Text} from "react-native";
import React, {FC} from "react";
import AwesomeLoading from 'react-native-awesome-loading';

export const Loading: FC = () => {
    // return <Text style={{fontSize: 100}}>Loading...</Text>
    return <AwesomeLoading indicatorId={8} size={50} isActive={true} text="wait for a while..."/>
}
