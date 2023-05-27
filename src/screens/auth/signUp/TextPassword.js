import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WrapPasswordTypes from "./wrapPasswordTypes";
import LabelItem from "../../../components/app/labelItem";
import AbstractInput from "../../../components/app/abstractInput";
import { Colors, Layout, Typography } from "../../../styles";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import AbstractButton from "../../../components/app/abstractButton";
import Routes from "../../../navigation/Routes";

const TextPassword = ({ backCall, navigation }) => {
  const [password, setPassword] = useState("");
  return (
    <WrapPasswordTypes
      backCall={backCall}
      _wrapStyle={{ alignItems: "center" }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <LabelItem label={"Text Password"} /> */}
        {/* <View style={{height: 400}} /> */}
        <AbstractInput
          height={100}
          width={Layout.WINDOW_WIDTH - 50}
          outerSvg={SVG_STRINGS.buttonOuterTwo(Colors.COLOR_INPUT_STROKE)}
          textChanged={setPassword}
          autoFocus
          secureText
          _style={{ alignItems: "center", justifyContent: "center" }}
          selectionColor={Colors.COLOR_INPUT_STROKE}
        />

        <AbstractButton
          label={"CONFIRM"}
          _style={{
            // backgroundColor: 'red',
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          height={50}
          width={220}
          labelStyle={{
            fontFamily: Typography.ROBODRON,
            fontSize: 14,
            paddingHorizontal: 20,
            color: Colors.TEXT_COLOR_3,
          }}
          outerSvg={SVG_STRINGS.gradientConfirm()}
          outerHeight={40}
          onPressButton={() => {
            backCall && backCall(password);
          }}
        />
      </View>
    </WrapPasswordTypes>
  );
};

export default TextPassword;

const styles = StyleSheet.create({});
