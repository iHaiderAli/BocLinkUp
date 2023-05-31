import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { MyStyle } from '../../../styles'
import Routes from '../../../navigation/Routes'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

const SplashScreen = ({ navigation }) => {

  const [loaded, error] = useFonts({
    'Robodron': require('../../../../assets/fonts/Robodron.otf'),
    'Robodron_Medium': require('../../../../assets/fonts/Robodron_Medium.otf'),
    'Robodron_Bold': require('../../../../assets/fonts/Robodron_Bold.otf'),
    'Calibri_Reg': require('../../../../assets/fonts/calibri_regular.ttf'),
    'Calibri_Bold': require('../../../../assets/fonts/Calebri_Bold.ttf'),
    'Calibri_Italic': require('../../../../assets/fonts/Calibri_Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      setTimeout(() => {
        navigation.navigate(Routes.SIGNUP_SCENE_1)
      }, 2000);
    }
  }, [loaded]);

  return (
    <View style={{ ...MyStyle.container, justifyContent: 'center', alignItems: 'center' }} onLayout={onLayoutRootView}>
      <Image
        source={require("../../../../assets/images/splashBackImage.png")}
        style={{
          height: 330,
          width: 280
        }}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})