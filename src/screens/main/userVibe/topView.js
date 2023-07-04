import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "../../../styles";
import FocusAwareStatusBar from "../../../components/app/focusAwareStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";

const TopView = (selectedContact) => {
  return (
    <SafeAreaView
      style={{
        height: 180,
        flexDirection: "column",
      }}>
      {/* <FocusAwareStatusBar
        translucent={true}
        backgroundColor={"transparent"}
        // barStyle={"dark-content"}
        hidden
      /> */}

      <View style={{ width: "100%" }}>
        <Image
          source={require("../../../../assets/images/user_img_bg.png")}
          style={styles.imageOuter}
        />

        <Image
          source={require("../../../../assets/images/bocUser.png")}
          style={styles.image}
        />

        <Image
          source={require("../../../../assets/images/bocUser.png")}
          style={{
            position: "absolute",
            height: 32,
            width: 32,
            right: 15,
            top: 20,
          }}
        />

      </View>

      <View style={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", }}>

        <View
          style={{
            width: '15%', height: 20,
          }}
        >

        </View>

        <ImageBackground
          resizeMode={'cover'}
          source={require("../../../../assets/images/tab_shadow.png")}
          style={{
            ...styles.stylestatusBarIcon,
            transform: [{ rotate: "-9.04deg" }],
            height: 60,
            width: 75
          }}
        >
          <Text
            style={{
              ...styles.tabText,
              color: Colors.TAB_DARK
            }}
          >
            CHATS
          </Text>
          <View style={{ height: 12.1, width: 12.1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: Colors.TAB_LIGHT, marginLeft: 5, borderRadius: 100 }}>
            <Text
              style={{
                fontSize: 8,
                // color: "#000000",
                color: Colors.TAB_DARK,
                paddingTop: 0
              }}
            >
              4
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            ...styles.stylestatusBarIcon,
            transform: [{ rotate: "-1.03deg" }],
            top: -10,
            left: 5
          }}
        >
          <Text
            style={{
              ...styles.tabText,
            }}
          >
            CONTACTS
          </Text>
        </View>
        <View
          style={{
            ...styles.stylestatusBarIcon,
            transform: [{ rotate: "3.97deg" }],
            top: -9,
            left: 9
          }}
        >
          <Text
            style={{
              ...styles.tabText,
            }}
          >
            VIBE
          </Text>
          <View style={{ height: 5, width: 5, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: Colors.TAB_LIGHT, marginLeft: 5, borderRadius: 100 }} />
        </View>

        <View
          style={{
            ...styles.stylestatusBarIcon,
            transform: [{ rotate: "8.97deg" }],
          }}
        >
          <Text
            style={{
              ...styles.tabText,
            }}
          >
            CALLS
          </Text>
        </View>

        <View
          style={{
            width: '10%', height: 20, top: 10
          }}
        >
          <Image
            source={require("../../../../assets/images/search.png")}
          />
        </View>

      </View>

      <Image
        source={require("../../../../assets/images/stroke_1.png")}
        style={{
          width: "90%",
          alignSelf: "flex-end",
          transform: [{ rotate: "1.5deg" }],
        }}
      />

      <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

        <View
          style={{
            width: '30%',
            height: 25,
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <Image
            source={require("../../../../assets/images/video_icon.png")}
          // style={{ width: 30, height: 15 }}
          />

        </View>

        <View
          style={{
            width: '40%',
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontSize: 10,
              color: "white",
              marginTop: -15
            }}
          >
            {selectedContact?.selectedContact?.firstName}
          </Text>

          <View style={{
            display: "flex", flexDirection: "row", marginTop: 10
          }}>
            <View style={{ height: 3, width: 3, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: Colors.COLOR_ONLINE, marginRight: 3, marginTop: 6, borderRadius: 100 }} />

            <Text
              style={{
                fontSize: 10,
                color: "white",
              }}
            >
              ONLINE
            </Text>

          </View>

        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: '30%',
            height: 25,
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 25,
            paddingLeft: 40,
            transform: [{ rotate: "10deg" }],
          }}
        >

          <Image
            source={require("../../../../assets/images/call_icon.png")}
          // style={{ width: 15, height: 15 }}
          />

          <Image
            source={require("../../../../assets/images/menu_dots.png")}
          // style={{ width: 1.94, height: 9.94 }}
          />

        </View>

      </View>

      <Image
        source={require("../../../../assets/images/stroke_1.png")}
        style={{
          width: "82%",
          alignSelf: "flex-end",
          transform: [{ rotate: "2.5deg" }],
        }}
      />

    </SafeAreaView>
  );
};

export default TopView;

const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red"
  },
  image: {
    height: 37,
    width: 37,
    position: "absolute",
    left: 25,
    top: 14,
  },

  imageOuter: {
    height: 56,
    width: 56,
    left: 15,
    top: 5,
  },

  stylestatusBarIcon: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // height: 55,
    // backgroundColor: "red"
  },
  tabText: {
    fontSize: 12,
    color: Colors.TAB_LIGHT,
  },
  parent: {
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 2 }],
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
