import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { _styles } from "./styles";
import { Colors, Layout, Typography } from "../../../styles";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import AbstractButton from "../../../components/app/abstractButton";
import WrapPasswordTypes from "./wrapPasswordTypes";
import { useAtom } from 'jotai'
import { BocApplicationAtom } from '../../../components/app/atoms/bocAtom'
import * as LocalAuthentication from 'expo-local-authentication';

const ScanningPassword = ({ backCall, navigation }) => {
  const [scanned, setScanned] = useState(false);
  const [bocAtom, setBocAtom] = useAtom(BocApplicationAtom)

  useEffect(() => {
    checkDevicePossibilities();
  }, []);

  checkDevicePossibilities = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware) {
      try {
        if(isEnrolled) {
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'This message only shows up on iOS',
            fallbackLabel: '',
          });
          if (result.success) {
            setScanned(true)
            setBocAtom((bocAtom) => ({
              ...bocAtom,
              scanningPassword: true
            }))
          } else {
            alert('Failed to authenticate, reason: ' + result.error);
          }
        } else {
          alert("Authentication not found")
        }
      } finally {
        
      } 
    } else {
      alert("Scanning hardware does not support")
    }

  }

  return (
    <WrapPasswordTypes
      backCall={backCall}
      _wrapStyle={{ alignItems: "center" }}
    >
      <View style={{ flex: 1.8, justifyContent: "flex-end" }}>
        <SvgContainer
          svg={SVG_STRINGS.thumbScanIcon()}
          width={140}
          height={180}
        />
      </View>
      <View style={{ flex: 2, justifyContent: "flex-start" }}>
        {!scanned == true && (
          <Text
            style={{
              marginTop: 50,
              textAlign: "center",
              fontFamily: Typography.ROBODRON,
              fontSize: 14,
              // lineHeight: 21,
              color: Colors.TEXT_COLOR_2,
              textShadowColor: Colors.TEXT_COLOR_2,
              textShadowOffset: { width: 1, height: 2 },
              textShadowRadius: 5,
              shadowOpacity: 0.8,
            }}
          >
            scan to set{"\n"}password
          </Text>
        )}
        {scanned == true && (
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
              backCall && backCall();
            }}
          />
        )}
      </View>
    </WrapPasswordTypes>
  );
};

export default ScanningPassword;

const styles = StyleSheet.create({
  layer: {
    position: "absolute",
    width: Layout.WINDOW_WIDTH,
    height: Layout.WINDOW_HEIGHT,
    zIndex: 1,
    opacity: 0.7,
  },
});
