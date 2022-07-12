import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"


// Should be post button (not camera)

interface CameraBtnProps {
  onPress: () => void;
}

export const CameraButton: FC<CameraBtnProps> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.button}
    >
      <Icon name={'camera'} size={30}/>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#adc1e6',
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    color: 'white',
    fontSize: 24,
  }
})
