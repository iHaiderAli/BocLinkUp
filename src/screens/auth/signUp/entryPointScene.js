import { StyleSheet, Text, View } from 'react-native'
import React, {  useRef, useEffect } from 'react'
import { Layout, MyStyle } from '../../../styles'
import Video from 'react-native-video';
import Routes from '../../../navigation/Routes';

const EntryPointScene = ({ navigation }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    // first
    setTimeout(() => {
      navigation.navigate(Routes.TWO_WAY_SECURITY_SCREEN)
    }, 3000);
    return () => {
      // second
    }
  }, [])
  
  return (
    <View style={{flex: 1}} >
        {/* <Video source={require("../../../../assets/video/BackgroundVideo.mp4")}   // Can be a URL or a local file.

            ref={videoRef}                                      // Store reference
            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
            // onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} 
            resizeMode='cover'
            repeat
          /> */}
    </View>
  )
}

export default EntryPointScene

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
})