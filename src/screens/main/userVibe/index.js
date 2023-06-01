import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  SafeAreaView as RNSafeAreView,
  NativeModules,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import UsersList from "./users";
import { Colors } from "../../../styles";
import LineLoader from "./lineLoader";
import LineAnim from "./lineAnim";
import AbstractButton from "../../../components/app/abstractButton";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import TopView from "./topView";
import FocusAwareStatusBar from "../../../components/app/focusAwareStatusBar";
const { StatusBarManager } = NativeModules;
const UserVibe = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? -StatusBarManager.HEIGHT : 0,
      }}
    >
      <View style={{ ...styles.container }}>
        <FocusAwareStatusBar
          translucent={true}
          backgroundColor={"transparent"}
          // barStyle={"dark-content"}
          hidden
        />
        <TopView />
        <View style={styles.innerContainer}>
          <View style={styles.userListContainer}>
            <UsersList />
          </View>
          <View style={styles.videoContainer}>
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
          </View>
        </View>
        <View
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
            {/* <AbstractButton
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
            /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    backgroundColor: Colors.BLACK_COLOR,
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
