import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Layout } from '../../../styles'
import Cursor from './cursor'
import Animated, { useValue } from 'react-native-reanimated'
import { GestureHandlerRootView, Style } from "react-native-gesture-handler";
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio'
import CircularProgressSVG from './circle';
import BackLayerOne from './backLayerOne'
import BackLayerTwo from './backLayerTwo'
import LayerThree from './layerThree'
const contentSize = Layout.WINDOW_WIDTH - 32;
const stroke_width = 40;
const r = PixelRatio.roundToNearestPixel(contentSize / 2);
const PostWelComeScreen = () => {
    const theta = useValue(0);
    const backgroundColor = 'white';
  return (
      <GestureHandlerRootView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
            {/* <View style={styles.container}> */}
                {/* <View style={{...styles.layerStyle,zIndex: 1}}>
                    <BackLayerOne />
                </View>
                <View style={{...styles.layerStyle,zIndex: 2}}>
                    <BackLayerTwo />
                </View> */}
                {/* <View style={{...styles.layerStyle, zIndex: 3}}> */}
                    <LayerThree />
                {/* </View> */}
                {/* <View style={{...styles.content, backgroundColor: 'red'}}> */}
                    {/* <Animated.View>
                        <CircularProgressSVG
                        />

                    </Animated.View>
                    <Cursor
                            r={50}
                    /> */}
                {/* </View> */}
            {/* </View> */}
      </GestureHandlerRootView>
  )
}

export default PostWelComeScreen

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // backgroundColor: 'pink',
        // justifyContent: 'center', 
        // alignItems: 'center',
        // transform: [{ rotate: '0deg' }]
    }, content: {
        // width: r * 2,
        // height: r * 2,
        // backgroundColor: 'red',
        // borderRadius: contentSize / 2
    },
    layerStyle: {
        position: 'absolute', 
        width: '100%', height: '100%',
        // justifyContent: 'center', alignItems: 'center'
    }
})