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
import { PASSWORD, PATTERN, SCANNING, QUESTION_FIELDS } from "../../../styles/consts";
import ScanningPassword from "./ScanningPassword";
import PatternPassword from "./PatternPassword";
import TextPassword from "./TextPassword";
import BackgroundImageLayer from "./backgroundImageLayer";
import MyBlurView from "../../../components/app/myBlurView";
import MyKeyboardAvoidView from "../../../components/app/myKeyboardAvoidingView";
import Routes from "../../../navigation/Routes";
import { useAtom } from 'jotai'
import { BocApplicationAtom } from '../../../components/app/atoms/bocAtom'
import SelectionFields from "./SelectionFields";

const SignUpSceneOne = ({ navigation, route }) => {
  const [userName, setUserName] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gettingUserName, setGettingUserName] = useState("");
  const [gettingPhoneNumber, setGettingPhoneNumber] = useState(false);
  const [isBlurScreenActive, setIsBlurScreenActive] = useState(false);

  const [questions, setQuestions] = useState(false);

  const [bocAtom, setBocAtom] = useAtom(BocApplicationAtom)

  useEffect(() => {
    validateAllData()
  })

  const handlePressIcons = (number) => {
    if (number == 1) {
      setPasswordType(PATTERN);
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        patternPassword: ''
      }))
    }
    if (number == 2) {
      setPasswordType(SCANNING);
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        scanningPassword: false
      }))
    }
    if (number == 3) {
      setPasswordType(PASSWORD);
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        textPassword: ''
      }))
    }
    if (number == 4) {
      setPasswordType(QUESTION_FIELDS);
    }

    setIsBlurScreenActive(true)
  };

  const handlePhoneIconPress = () => {
    setGettingPhoneNumber(true);
  };

  const phoneInputLeave = () => {
    if (phoneNumber == "") {
      setGettingPhoneNumber(false);
    } else {
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        userPhone: phoneNumber
      }))
    }
    validateAllData();
  };

  const userNameInputLeave = () => {
    if (userName == "") {
      setGettingUserName(false);
    } else {
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        userName: userName,
      }))
    }
    validateAllData();
  };

  const validateAllData = () => {
    // console.log("Data: ", bocAtom)
    if (bocAtom.userName != "") {
      setUserName(bocAtom.userName)
    }
    if (bocAtom.userPhone != "") {
      setPhoneNumber(bocAtom.userPhone)
    }
    if (bocAtom.userName != "" 
    && bocAtom.userPhone != "" 
    && bocAtom.patternPassword != "" 
    && bocAtom.scanningPassword == true
    && bocAtom.textPassword != "") {

      if (questions == false) {
        handlePressIcons(4)
      } else {
        validateAndRegisterUser()
      }

    }
  };

  const validateAndRegisterUser = () => {
    if (bocAtom.userName == "") {
      Alert.alert("user Name is required");
    } else if (bocAtom.userPhone == "") {
      Alert.alert("Phone number is required");
    } else if (bocAtom.patternPassword == "") {
      Alert.alert("pattern pattern is required");
    } else if (bocAtom.scanningPassword == false) {
      Alert.alert("scan is required");
    } else if (bocAtom.textPassword == "") {
      Alert.alert("text password is required");
    } else {
      console.log("Success data", bocAtom)
      navigation.navigate(Routes.CONTACT_PROFILE_TAB)
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
              backCall={() => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
                validateAllData();
              }}
              navigation={navigation}
            />
          )}
          {passwordType == SCANNING && (
            <ScanningPassword
              backCall={(value) => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
                validateAllData();
              }}
              navigation={navigation}
            />
          )}
          {passwordType == PASSWORD && (
            <TextPassword
              backCall={() => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
                validateAllData();
              }}
              navigation={navigation}
            />
          )}
          {passwordType == QUESTION_FIELDS && (
            <SelectionFields
              backCall={(value) => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
                if (value != "") {
                  setQuestions(true)
                  validateAndRegisterUser()
                }
              }}
            />
          )}
          <View style={{ flex: 2 }} />
          <View style={{ flex: 1.2, alignItems: "center", opacity: isBlurScreenActive ? 0.3 : 1 }}>
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
              inputValue={userName}
            // isdisabled={true}
            />
          </View>
        </MyKeyboardAvoidView>
      </BackgroundImageLayer>
    </View >
  );
};

export default SignUpSceneOne;