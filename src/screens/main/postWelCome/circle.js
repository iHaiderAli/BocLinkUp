import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const { PI } = Math;
const { multiply } = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);



const CircularProgressSVG = ({
  theta,
  r,
  color,
  strokeWidth,
}) => {
  const radius = r - strokeWidth / 2;
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Circle
        cx={r}
        cy={r}
        fill="transparent"
        stroke="white"
        r={radius}
        {...{ strokeWidth }}
      />
      <Circle cx={r} cy={r} fill="transparent" stroke={color} r={radius} />
    </Svg>
  );
};

export default CircularProgressSVG;