import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import { Colors } from "../../../styles";

const CustomStatusBar = () => {
  return (
    <View
      style={{
        // width: "100%",
        justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
        top: 20,
        // transform: [{ rotate: "50deg" }],
      }}
    >
      <View
        style={{
          width: 220,
          height: 22,
          backgroundColor: Colors.WHITE,
          opacity: 0.3,
          borderRadius: 12,
        }}
      />
      <View
        style={{
          width: 220,
          height: 20,
          // backgroundColor: Colors.WHITE,
          borderRadius: 12,
          position: "absolute",
          zIndex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={styles.stylestatusBarIcon}>
          <SvgContainer size={17} svg={SVG_STRINGS.speakerIcon()} />
        </View>
        <View style={styles.dot} />
        <View style={styles.stylestatusBarIcon}>
          <SvgContainer size={17} svg={SVG_STRINGS.wifiSignalIcon()} />
        </View>
        <View style={styles.dot} />

        <View style={styles.stylestatusBarIcon}>
          <SvgContainer size={13} svg={SVG_STRINGS.simSignals()} />
        </View>
        <View style={styles.dot} />

        <View style={styles.stylestatusBarIcon}>
          <SvgContainer size={17} svg={SVG_STRINGS.chargingIcon()} />
        </View>
        <View style={styles.dot} />

        <View style={styles.stylestatusBarIcon}>
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>01:40</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({
  stylestatusBarIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    alignSelf: "center",
    borderWidth: 0,
    opacity: 0.75,
  },
});
