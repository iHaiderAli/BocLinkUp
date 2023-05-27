import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView, VibrancyView } from "@react-native-community/blur";

const MyBlurView = () => {
  return (
    <BlurView
      style={styles.absolute}
      blurType="light"
      // blurAmount={10}
      reducedTransparencyFallbackColor={"black"}
    />
  );
};

export default MyBlurView;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
