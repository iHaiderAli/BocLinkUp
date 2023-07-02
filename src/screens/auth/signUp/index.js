import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Alert,
  TouchableOpacity,
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
import MyKeyboardAvoidView from "../../../components/app/myKeyboardAvoidingView";
import { useAtom } from 'jotai'
import { BocApplicationAtom } from '../../../components/app/atoms/bocAtom'
import SelectionFields from "./selectionFields";
import axios from 'axios';
import { API_URL } from "../../../common/constants";
import Routes from "../../../navigation/Routes";

const SignUpSceneOne = ({ navigation, route }) => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [userName, setUserName] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gettingUserName, setGettingUserName] = useState("");
  const [gettingPhoneNumber, setGettingPhoneNumber] = useState(false);
  const [isBlurScreenActive, setIsBlurScreenActive] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [bocAtom, setBocAtom] = useAtom(BocApplicationAtom)

  useEffect(() => {
    if (bocAtom.phone != "" &&
      bocAtom.userName != "" &&
      bocAtom.patternPassword != "" &&
      bocAtom.scanningPassword == true &&
      bocAtom.textPassword != "" && !questions) {
      handlePressIcons(4)
    }
  }, [bocAtom])

  const phoneInputLeave = () => {
    if (phoneNumber == "") {
      setGettingPhoneNumber(false);
    } else {
      setBocAtom((bocAtom) => ({
        ...bocAtom,
        userPhone: phoneNumber
      }))
    }
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
  };

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

  const validateAndRegisterUser = () => {
    console.log("Signup API", bocAtom)
    if (bocAtom.userPhone == "") {
      Alert.alert("Phone number is required");
    } else if (bocAtom.userName == "") {
      Alert.alert("user Name is required");
    } else if (bocAtom.patternPassword == "") {
      Alert.alert("pattern pattern is required");
    } else if (bocAtom.scanningPassword == false) {
      Alert.alert("Finger print is required");
    } else if (bocAtom.textPassword == "") {
      Alert.alert("text password is required");
    } else if (questions == false) {
      handlePressIcons(4)
    } else {
      // axios.post(`${API_URL}/registration/register`, {
      //   name: bocAtom.userName,
      //   phone: bocAtom.userPhone,
      //   passwordType: "Numeric",
      //   numericPassword: bocAtom.textPassword,
      //   patternPassword: bocAtom.patternPassword
      // }).then((res) => {
      //   //will save jwt token later
      //   navigation.navigate(Routes.USER_VIBE)
      // }).catch((err) => {
      //   if (err.response.data.error.message) {
      //     alert(err.response.data.error.message)
      //   } else {
      //     alert("Error in signing up user")
      //   }
      // })
    }
  };

  const validateLoginDataAndApi = () => {
    console.log(bocAtom)
    if (bocAtom.userPhone == "") {
      Alert.alert("Phone number is required");
    } else if (bocAtom.patternPassword == "" && bocAtom.scanningPassword == false && bocAtom.textPassword == "") {
      Alert.alert("Please enter any password");
    } else {
      // axios.post(`${API_URL}/registration/login`, {
      //   phone: bocAtom.userPhone,
      //   passwordType: bocAtom.patternPassword ? 'pattern' : 
      //   bocAtom.textPassword ? 'password' : 'fingerprint',
      //   password: bocAtom.patternPassword || bocAtom.textPassword,
      // }).then((res) => {
      //   //will save jwt token later
      //   console.log("testing", res)
      //   navigation.navigate(Routes.USER_VIBE)
      // }).catch((err) => {
      //   if (err.response.data.error.message) {
      //     alert(err.response.data.error.message)
      //   } else {
      //     alert("Error in loging in user")
      //   }
      // })
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
              isLoginScreen={isLoginScreen}
              backCall={() => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
              }}
              navigation={navigation}
            />
          )}
          {passwordType == SCANNING && (
            <ScanningPassword
              backCall={() => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
              }}
              navigation={navigation}
            />
          )}
          {passwordType == PASSWORD && (
            <TextPassword
              backCall={() => {
                setPasswordType(false);
                setIsBlurScreenActive(false);
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
                }
              }}
            />
          )}
          <View style={{ flex: 1.8 }}>
            <TouchableOpacity
              onPress={() => {
                if (isLoginScreen) {
                  validateLoginDataAndApi()
                } else {
                  validateAndRegisterUser();
                }
              }}
              style={{ height: 100, width: 100, marginTop: 150, marginLeft: 20, display: "flex", alignItems: "center", justifyContent: "center" }} >
              <Text
                style={{
                  fontFamily: Typography.CALIBRI_REGULAR,
                  fontSize: 12,
                  textAlignVertical: "center",
                  alignSelf: "flex-start",
                  color: "#BEB578",
                }}
              >
                {"Tap to Register"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.2, alignItems: "center", opacity: isBlurScreenActive ? 0.3 : 1 }}>
            <AbstractButton
              label={"TAP TO ENTER MOBILE NUMBER"}
              icons={[SVG_STRINGS.phoneIcon()]}
              onPressIcon={(i) => {
                setGettingPhoneNumber(true);
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
              keyboardType={"default"}
              selectionColor={Colors.WHITE}
              onBlurInput={phoneInputLeave}
              setInputValue={(phone) => {
                setPhoneNumber(phone);
              }}
              isdisabled={true}
            />
            <View style={{ height: 5 }} />
            <AbstractButton
              label={isLoginScreen ? "Enter Password" : "SET PASSWORD"}
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
            {
              isLoginScreen ?
                null
                : <AbstractButton
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
            }

            <TouchableOpacity
              onPress={() => {
                setIsLoginScreen(!isLoginScreen)
              }}
              style={{ marginTop: 15 }}
            >
              <Text
                style={{
                  fontFamily: Typography.CALIBRI_REGULAR,
                  fontSize: 16,
                  textAlignVertical: "center",
                  alignSelf: "flex-start",
                  color: Colors.WHITE,
                }}
              >
                {isLoginScreen ? "Don't have an account? sign up" : "Already have an account? Sign in"}
              </Text>

            </TouchableOpacity>
          </View>
        </MyKeyboardAvoidView>
      </BackgroundImageLayer>
    </View >
  );
};

export default SignUpSceneOne;