import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
// import { PatternLock } from "@shanshang/react-native-pattern-lock";
import WrapPasswordTypes from "./wrapPasswordTypes";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import { Colors, Layout, Typography } from "../../../styles";
import PasswordGesture from "react-native-gesture-password";
import AbstractButton from "../../../components/app/abstractButton";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../../../navigation/Routes";
// import PropTypes from 'prop-types';

const PatternPassword = ({ backCall, _styles, navigation }) => {
  const [patternStatus, setPatternStatus] = useState("normal");
  const [patternValue, setPatternValue] = useState("");
  const [confirmPatternValue, setConfirmPatternValue] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const patternRef = useRef(null);
  return (
    <WrapPasswordTypes
      backCall={backCall}
      hideBackButton
      _wrapStyle={{
        width: "100%",
        flex: 1,
        // flexDirection: 'column'
      }}
    >
      <View
        style={{
          height: 120,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 3,
          // alignItems: 'center',
          justifyContent: "center",
          // backgroundColor: 'red'
        }}
      >
        <AbstractButton
          label={"BACK"}
          labelStyle={{
            fontFamily: Typography.ROBODRON,
            fontSize: 13,
            color: Colors.WHITE,
            padding: 0,
            margin: 0,
          }}
          onPressIcon={() => {
            navigation.navigate(Routes.SIGNUP_SCENE_1);
          }}
          height={40}
          _style={{
            justifyContent: "center",
            marginTop: 80,
            alignSelf: "center",
          }}
          rightSvg={SVG_STRINGS.backIcon()}
          rightSvgSize={18}
          onPressButton={() => {
            backCall && backCall("");
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            marginTop: Platform.OS == "ios" ? 155 : 130,
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              width: "100%",
              flexDirection: "row",
              height: 30,
              marginTop: 40,
              paddingHorizontal: "12%", // Layout.WINDOW_WIDTH / 6.5,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  // backgroundColor: 'red',
                  flex: 1,
                  fontFamily: Typography.CALIBRI_REGULAR,
                  fontSize: 24,
                  textAlignVertical: "center",
                  alignSelf: "flex-start",
                  color: Colors.WHITE,
                  // textShadowColor: Colors.WHITE,
                  // textShadowOffset: {width: 0, height: 1},
                  // textShadowRadius: 5,
                  // shadowOpacity: 0.6,
                }}
              >
                {patternValue ? "SET AGAIN" : "SET PATTERN"}{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 0.3,
                // backgroundColor: 'red',
                alignItems: "center",
              }}
            >
              <SvgContainer
                svg={SVG_STRINGS.patternIcon()}
                size={40}
                _style={{ flex: 1 }}
              />
            </View>
          </View>

          <SvgContainer
            svg={SVG_STRINGS.patternBg()}
            width={Layout.WINDOW_WIDTH}
            height={400}
          />
        </View>
        <View
          style={{
            width: "100%",
            right: 15,
            // marginTop: Platform?.OS == 'android' ? 100 : 0,
            position: "absolute",
            zIndex: 1,
          }}
        >
          <PasswordGesture
            status={patternStatus}
            rightColor={"#4DFFFF"}
            outerCircle={false}
            normalColor={"#4DFFFF"}
            ref={patternRef}
            onEnd={(val) => {
              if (!confirmPatternValue) {
                // console.log("1st try", val);
                setPatternValue(val);
                setConfirmPatternValue(true);
                setPatternStatus("right");
              } else if (confirmPatternValue && val == patternValue) {
                // console.log("pattern matched", val);
                setPatternStatus("right");
                backCall && backCall(val);
                setShowConfirmButton(true);
              } else if (confirmPatternValue && val != patternValue) {
                // console.log("wrong matched", val);
                setPatternStatus("wrong");
              }
            }}
          />

          {showConfirmButton ? (
            <View
              style={{
                width: "100%",
                top: 550,
                position: "relative",
              }}
            >
              <AbstractButton
                label={"CONFIRM"}
                _style={{
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
                  backCall && backCall();
                  navigation &&
                    navigation.navigate(Routes.SELECTION_FIELD_SIGNUP);
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    </WrapPasswordTypes>
  );
};

export default PatternPassword;

const styles = StyleSheet.create({});
