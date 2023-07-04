import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  SafeAreaView as RNSafeAreView,
  NativeModules,
  Platform,
  ImageBackground,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AbstractInput from "../../../components/app/abstractInput";

import React, { useEffect, useState } from "react";
import UsersList from "./users";
import { Colors, Layout } from "../../../styles";
import LineLoader from "./lineLoader";
import LineAnim from "./lineAnim";
import AbstractButton from "../../../components/app/abstractButton";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import TopView from "./topView";
import FocusAwareStatusBar from "../../../components/app/focusAwareStatusBar";
import * as Contacts from 'expo-contacts';

const { StatusBarManager } = NativeModules;

const UserVibe = () => {

  const [constacts, setConstacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setConstacts(data);
        }
      }
    })();
  }, []);

  return (
    <ImageBackground style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      source={require("../../../../assets/images/home_bg.png")}
      resizeMode={'cover'}
    >
      <View style={{ ...styles.container }}>
        <TopView selectedContact={selectedContact} />
        <View style={styles.innerContainer}>
          <View style={styles.userListContainer}>
            <UsersList usersList={constacts} onContactClicked={(item) => {
              setSelectedContact(item)
            }} />
          </View>
          {/* <View style={styles.videoContainer}>
            <Image
              source={require("../../../../assets/images/imageVirtual.png")}
              style={{ flex: 1 }}
              resizeMode="stretch"
            />
            <View
              style={{
                width: Dimensions.get("screen").width - 100,
                alignItems: "flex-end",
              }}
            >
              <Text style={styles.play}>Let's Play!</Text>
              <LineLoader />
              <LineAnim />
            </View>
          </View> */}
        </View>

        <View style={{ height: 60, display: "flex", justifyContent: "center" }}>

          <View style={{ height: 40, display: "flex", alignItems: "center" }}>
            <ImageBackground
              source={require("../../../../assets/images/chat_input_bg.png")}
              resizeMode={'cover'}
              style={{ height: 40, width: "98%", position: "relative" }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("testing attachment")
                }}>
                <Image
                  source={require("../../../../assets/images/chat_attachment.png")}
                  style={{
                    width: 59.71, height: 25.28, marginLeft: 25, marginTop: 3,
                    position: "absolute"
                  }}
                  resizeMode={"cover"}
                />
              </TouchableWithoutFeedback>



              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("testing")
                }}>
                <View style={{
                  marginRight: 57, marginTop: 6,
                }}>
                  <Image
                    source={require("../../../../assets/images/chat_emoji.png")}
                    style={{
                      width: 35.13, height: 30, alignSelf: "flex-end",
                      position: "absolute"
                    }}
                    resizeMode={"cover"}
                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("testing camera")
                }}>
                <View style={{ marginRight: 32 }}>
                  <Image
                    source={require("../../../../assets/images/chat_camera.png")}
                    style={{
                      width: 35.13, height: 30, alignSelf: "flex-end",
                      position: "absolute"
                    }}
                    resizeMode={"cover"}
                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("testing mic")
                }}>
                <View style={{ marginRight: 8 }}>

                  <Image
                    source={require("../../../../assets/images/chat_mic.png")}
                    style={{
                      width: 26.09, height: 25.28, alignSelf: "flex-end", marginTop: 5,
                      position: "absolute"
                    }}
                    resizeMode={"cover"}
                  />
                </View>
              </TouchableWithoutFeedback>

              <AbstractInput
                height={25}
                width={Layout.WINDOW_WIDTH - 180}
                // outerSvg={SVG_STRINGS.buttonOuterTwo(Colors.COLOR_INPUT_STROKE)}
                placeholder={"type a message"}
                placeholderTextColor={Colors.WHITE}
                // autoFocus
                _styleText={{
                  paddingHorizontal: 0, textAlign: 'left',
                }}
                _style={{ marginLeft: 95 }}
                selectionColor={Colors.WHITE}
                onDoneClicked={(text) => {
                  alert(text)
                }}
              />

            </ImageBackground>

          </View>

        </View>

        {/* <View
          style={{
            height: 60,
            backgroundColor: Colors.BLACK_COLOR,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AbstractButton
              outerSvg={SVG_STRINGS.buttonOuter5()}
              outerHeight={35}
              height={35}
              width={120}
              label={"REPLAY"}
            />
            <View style={{ width: 20 }} />
            <AbstractButton
              outerSvg={SVG_STRINGS.buttonOuter5()}
              outerHeight={35}
              height={35}
              width={120}
              label={"MUTE"}
            />
          </View>
        </View> */}
      </View>
    </ImageBackground >
  );
};

export default UserVibe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  userListContainer: {
    // height: "90%",
    width: 80,
  },
  videoContainer: {
    height: "100%",
    // backgroundColor: Colors.BLACK_COLOR,
  },
  play: {
    fontSize: 14,
    color: Colors.WHITE,
    alignSelf: "center",
  },
  lineContainer: {
    width: "100%",
    height: 75,
    // borderRadius: 12,
    backgroundColor: "blue",
  },
  curvedLine: {
    width: "20%",
    height: 40,
    position: "absolute",
    // bottom: -25,
    left: "40%",
    borderRadius: 35,
    backgroundColor: "red",
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "yellow",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
});
