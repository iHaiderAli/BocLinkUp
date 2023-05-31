import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { _styles } from "./styles";
import { Colors, Layout, Typography } from "../../../styles";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import AbstractButton from "../../../components/app/abstractButton";
import WrapPasswordTypes from "./wrapPasswordTypes";
import Routes from "../../../navigation/Routes";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { useAtom } from 'jotai'
import { BocApplicationAtom } from '../../../components/app/atoms/bocAtom'

const ScanningPassword = ({ backCall, navigation }) => {
  const [scanned, setScanned] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics()
  const [bocAtom, setBocAtom] = useAtom(BocApplicationAtom)

  useEffect(async () => {
    const { biometryType } = await rnBiometrics.isSensorAvailable()
    rnBiometrics.isSensorAvailable()
      .then((resultObject) => {
        const { available, biometryType } = resultObject

        if (available && biometryType === BiometryTypes.TouchID) {
          console.log('TouchID is supported')
        } else if (available && biometryType === BiometryTypes.FaceID) {
          console.log('FaceID is supported')
        } else if (available && biometryType === BiometryTypes.Biometrics) {
          rnBiometrics.createKeys()
            .then((resultObject) => {
              const { publicKey } = resultObject
              console.log(publicKey)
            })
        } else {
          console.log('Biometrics not supported')
        }
      })

    rnBiometrics.biometricKeysExist()
      .then((resultObject) => {
        const { keysExist } = resultObject

        if (keysExist) {
          rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
            .then((resultObject) => {
              // console.log("Testing", resultObject)
              const { success } = resultObject

              if (success) {
                console.log('successful biometrics provided')
                setScanned(true);
                setBocAtom((bocAtom) => ({
                  ...bocAtom,
                  scanningPassword: resultObject
                }))
              } else {
                console.log('user cancelled biometric prompt')
              }
            })
            .catch(() => {
              console.log('biometrics failed')
            })
        } else {
          console.log('Keys do not exist or were deleted')
        }
      })

    // rnBiometrics.biometricKeysExist()
    // .then((resultObject) => {
    //   const { keysExist } = resultObject

    //   if (keysExist) {
    //     console.log('Keys exist')
    //   } else {
    //     console.log('Keys do not exist or were deleted')
    //   }
    // })
    // alert('ok')
    //   first

    return () => {
      // second/
    };
  }, []);

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
