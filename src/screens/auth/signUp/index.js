import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Colors, Layout, MyStyle, Typography } from "../../../styles";

import AbstractButton from "../../../components/app/abstractButton";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import { PASSWORD, PATTERN, SCANNING } from "../../../styles/consts";
import ScanningPassword from "./ScanningPassword";
import PatternPassword from "./PatternPassword";
import TextPassword from "./TextPassword";
import BackgroundImageLayer from "./backgroundImageLayer";
import MyBlurView from "../../../components/app/myBlurView";
import MyKeyboardAvoidView from "../../../components/app/myKeyboardAvoidingView";

const SignUpSceneOne = ({ navigation, route }) => {
  const [userName, setUserName] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gettingUserName, setGettingUserName] = useState("");
  const [gettingPhoneNumber, setGettingPhoneNumber] = useState(false);
  const [isBlurScreenActive, setIsBlurScreenActive] = useState(false);
  const [isPasswordSet, setPassword] = useState(
    route?.params?.password ? true : false
  );

  const [patternPasswordText, setPatternPasswordText] = useState(false);
  const [scanPasswordText, setScanPasswordText] = useState(false);
  const [textPasswordText, setTextPasswordText] = useState(false);

  useEffect(() => {
    isBlurScreen()
  })
  const handlePressIcons = (number) => {
    // on selected password open screen
    if (number == 1) {
      setPasswordType(PATTERN);
    }
    if (number == 2) {
      setPasswordType(SCANNING);
    }
    if (number == 3) {
      setPasswordType(PASSWORD);
    }
  };

  const handlePhoneIconPress = () => {
    setGettingPhoneNumber(true);
  };

  const phoneInputLeave = () => {
    if (phoneNumber == "") {
      setGettingPhoneNumber(false);
    }
    isBlurScreen();
  };

  const userNameInputLeave = () => {
    if (userName == "") {
      setGettingUserName(false);
    }
    isBlurScreen();
  };

  const isBlurScreen = () => {
    // console.log("input ", userName)
    // console.log("input ", phoneNumber)
    // console.log("input ", patternPasswordText)
    // console.log("input ", textPasswordText)
    // console.log("input ", scanPasswordText)

    // if (userName != "" && phoneNumber != "" && patternPasswordText != "" && textPasswordText != "") {
    //   setIsBlurScreenActive(false);

    //   setTimeout(() => {
    //     navigation && navigation.navigate(Routes.SELECTION_FIELD_SIGNUP)
    //   }, 2000);

    // } else {
    //   setIsBlurScreenActive(true);
    // }
  };

  const validateAndRegisterUser = () => {
    if (!gettingUserName) {
      Alert.alert("user Name is required");
    } else if (!gettingPhoneNumber) {
      Alert.alert("Phone number is required");
    } else if (patternPasswordText == "") {
      Alert.alert("pattern is required");
    } else if (scanPasswordText == "") {
      Alert.alert("finger print scanning is required");
    } else if (textPasswordText == "") {
      Alert.alert("password is required");
    } else {
      console.log("success");
      // navigation.navigate(Routes.SELECTION_FIELD_SIGNUP)
    }
  };

  return (
    <View
      style={{
        ...MyStyle.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundImageLayer isBlur={isBlurScreenActive}>
        <MyKeyboardAvoidView widthScroll={true} extraHeight={0}>
          {passwordType == PATTERN && (
            <PatternPassword
              backCall={(value) => {
                setPasswordType(false);
                if (value != "") {
                  console.log("PatternPassword " + value);
                  setPatternPasswordText(value);
                  isBlurScreen();
                }
              }}
              navigation={navigation}
            />
          )}
          {passwordType == SCANNING && (
            <ScanningPassword
              backCall={(value) => {
                setPasswordType(false);
                if (value != "") {
                  console.log("ScanningPassword " + value);
                  setScanPasswordText(value);
                  isBlurScreen();
                }
              }}
              navigation={navigation}
            />
          )}
          {passwordType == PASSWORD && (
            <TextPassword
              backCall={(value) => {
                setPasswordType(false);
                if (value != "") {
                  console.log("TextPassword " + value);
                  setTextPasswordText(value);
                  isBlurScreen();
                }
              }}
              navigation={navigation}
            />
          )}
          <View style={{ flex: 2 }} />
          <View style={{ flex: 1.2, alignItems: "center" }}>
            <AbstractButton
              label={"TAP TO ENTER MOBILE NUMBER"}
              icons={[SVG_STRINGS.phoneIcon()]}
              onPressIcon={(i) => {
                handlePhoneIconPress();
              }}
              labelStyle={{
                fontSize: 8,
                fontFamily: Typography.CALIBRI_REGULAR,
              }}
              outerSvg={SVG_STRINGS.buttonOne()}
              openInput={gettingPhoneNumber}
              inputTextStyle={{
                fontFamily: Typography.ROBODRON,
                fontSize: 11,
                color: Colors.WHITE,
                // backgroundColor: 'red'
              }}
              keyboardType={"number-pad"}
              selectionColor={Colors.WHITE}
              onBlurInput={phoneInputLeave}
              setInputValue={(phone) => {
                setPhoneNumber(phone);
              }}
              isdisabled={true}
            />
            <View style={{ height: 5 }} />
            <AbstractButton
              label={"SET PASSWORD"}
              icons={[
                SVG_STRINGS.patternIcon(),
                SVG_STRINGS.thumbScanIcon(),
                SVG_STRINGS.passwordIcon(),
              ]}
              iconSize={20}
              iconPaddingHorizontal={30}
              onPressIcon={handlePressIcons}
              labelStyle={{
                fontSize: 8,
                fontFamily: Typography.CALIBRI_REGULAR,
              }}
              outerSvg={SVG_STRINGS.buttonOne()}
            />
            <View style={{ height: 20 }} />
            <AbstractButton
              height={50}
              width={Layout.WINDOW_WIDTH}
              outerSvg={SVG_STRINGS.buttonOuterTwo()}
              label={"enter your name"}
              onPressButton={() => {
                setGettingUserName(true);
              }}
              labelStyle={{ fontSize: 9, fontFamily: Typography.ROBODRON }}
              openInput={gettingUserName}
              inputTextStyle={{
                fontFamily: Typography.ROBODRON,
                fontSize: 11,
                color: Colors.WHITE,
                // backgroundColor: 'red'
              }}
              // keyboardType={"number-pad"}
              selectionColor={Colors.WHITE}
              onBlurInput={userNameInputLeave}
              setInputValue={(name) => {
                setUserName(name);
              }}
              // inputValue={userName}
              // isdisabled={true}
            />
          </View>
          {passwordType && <MyBlurView />}
        </MyKeyboardAvoidView>
      </BackgroundImageLayer>
    </View>
  );
};

export default SignUpSceneOne;

const styles = StyleSheet.create({});
