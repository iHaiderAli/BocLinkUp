import { StyleSheet, View } from "react-native";
import React from "react";
import Svg, {
  Circle,
  Text,
  TextPath,
  TSpan,
  G,
  Rect,
  Line,
} from "react-native-svg";
import { Colors } from "../../../styles";

const LineAnim = () => {
  const spacing = 8;
  const height = 12;
  return (
    <Svg height={height} width="100%">
      {[
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ].map((_, index) => (
        <Rect
          key={index}
          x="0"
          y="0"
          width="1"
          height={height}
          fill="#FED049"
          translateX={spacing * index}
        />
      ))}
      {[
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ].map((_, index) => (
        <Rect
          key={index}
          x="65"
          y="0"
          width="1"
          height={height}
          fill="#FED049"
          translateX={spacing * index}
          opacity={0.5}
        />
      ))}
    </Svg>
  );
};

export default LineAnim;

const styles = StyleSheet.create({});
