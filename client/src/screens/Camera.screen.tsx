import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { Loading } from "../components/Loading/Loading";

export const CameraScreen: FC = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <Loading />;

  return (
    <View style={style.screen}>
      <Camera
        device={device}
        isActive={true}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#222",
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
