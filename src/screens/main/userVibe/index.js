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
  ImageBackground
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import React, { useEffect, useState } from "react";
import UsersList from "./users";
import { Colors } from "../../../styles";
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
    </ImageBackground>
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
    height: "95%",
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
