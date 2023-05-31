import { StyleSheet, ImageBackground } from "react-native";
import React from "react";

const BackgroundImageLayer = ({ children, isBlur }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/images/signupbackImage.png")}
      imageStyle={{
        flex: 1,
        // resizeMode: 'stretch'
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
      blurRadius={isBlur ? 5 : 0}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageLayer;

const styles = StyleSheet.create({});
