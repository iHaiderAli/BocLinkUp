import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors } from '../../../styles'
import SiderOne from './siderOne'
import SiderTwo from './siderTwo'
// import { Canvas, Rect, useSpring, Circle, BlurMask, vec, DiscretePathEffect, Path } from "@shopify/react-native-skia";
import {Layout} from "../../../styles"
// const RADIUS = (Layout.WINDOW_WIDTH - 32 ) / 2
// const center = { x: RADIUS * Math.sin(20), y: RADIUS * Math.cos(20) }
import { Circle, Svg } from "react-native-svg";
// import { interpolate, multiply } from 'react-native-reanimated'

const size = Layout.WINDOW_WIDTH - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth ) / 2.25;
const circumference = 2 * Math.PI * radius;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const additionalRadius = radius ? radius : 0;
const additionalOffset = strokeWidth ? strokeWidth : 0;
const LayerThree = ({  }) => {
    // const [toggled, setToggled] = useState(false);
//   const position = useSpring(toggled ? 100 : 0);
//   const logo = "M256 128.015C256 111.057 234.762...";
const offset = useRef(new Animated.Value(0)).current;
const å = offset.interpolate({
    inputRange:  [0,1],
    outputRange: [0, Math.PI * 2],
    extrapolate: "clamp",
  })
  Animated.loop(
    Animated.timing(offset, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    })
  ).start();

  const spinOff = useRef(new Animated.Value(0)).current;
  const rotation = spinOff.interpolate({
    inputRange: [0, 1],
    outputRange: 
    ['0deg', '-360deg'],
  });
  Animated.loop(
    Animated.timing(spinOff, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    })
  ).start();
// const a = offset.interpolate({
//     inputRange:  [0,1],
//     outputRange: [0, Math.PI * 2],
//     // extrapolate: "clamp",
// })
// const b = useRef(new Animated.Value(radius)).current;
const strokeDashoffset = 10;// Animated.multiply(å , radius);
  return (
    <View style={{flex: 1}}>
        {/* <View style={{height: '100%', width: '100%', flexDirection: 'row'}}> */}
            {/* <SiderOne /> */}
            
            <View style={{flex: 1, 
                justifyContent: 'center', alignItems: 'center', 
                // backgroundColor: 'pink'
            }}
                >
                {/* <Canvas
                    style={{flex: 1,  
                        // justifyContent: 'center', alignItems:'center', 
                    // backgroundColor: 'pink'
                }}
                > */}
                <Svg 
                width= {Layout.WINDOW_WIDTH / 2}
                height= {Layout.WINDOW_HEIGHT / 2}
                    // width={size} height={size}
                    style={{backgroundColor: 'green', 
                        // justifyContent :'center', alignItems: 'center', 
                    // width: Layout.WINDOW_WIDTH / 2,
                    // height: Layout.WINDOW_HEIGHT / 2
                }}
                >
                    <Circle
                        stroke={Colors.COLOR_INPUT_STROKE}
                        fill={'none'}
                        cx={(size)/ 2}
                        cy={(size)/ 2}
                        r={radius}
                        // strke
                        // strokeDashoffset={strokeDashoffset}
                        // strokeDasharray={`${circumference} ${circumference}`}
                        {...{strokeWidth}}
                    />
                     {/* <Animated.View
                        style={{transform: [{rotate: rotation}] }}
                    >
                        {/* <Text style={{color: 'red'}}>Name</Text> */}
                        {/* <Circle
                            stroke={Colors.SECONDARY}
                            fill={'none'}
                            cx={(size)/ 2}
                            cy={(size)/ 2}
                            r={radius}
                            // strke
                            // strokeDashoffset={strokeDashoffset}
                            strokeDasharray={`${circumference} ${circumference}`}
                            {...{strokeWidth, strokeDashoffset}}
                            // transform={[{ rotate: rotation }]}
                        /> 
                    </Animated.View> */}
                    <AnimatedCircle
                        stroke={Colors.YELLOW}
                        fill={'none'}
                        cx={size / 2}
                        cy={size / 2}
                        // origin={{x: size / 2, y: size / 2}}
                        r={radius}
                        strokeDasharray={`${circumference} ${circumference}`}
                        {...{strokeWidth, strokeDashoffset}}
                        style={{ transform: [{ rotate: rotation },
                            // { translateX: 0, translateY: 0 }
                        ] }}
                    />
                        {/* <Text style={{color: 'yellow'}}>Check</Text>
                    </AnimatedCircle> */}
                </Svg>
                    {/* <Path path={logo} color="red">
                        <DiscretePathEffect length={10} deviation={2} />
                    </Path> */}
                {/* </Canvas> */}
                {/* <Image
                        source={require("../../../../assets/images/logo.png")}
                        style={{
                            // alingSelf: 'center', 
                            // backgroundColor: 'red',
                            width: 100,
                            height: 100,
                            borderRadius: 50
                        }}
                    
                /> */}
            </View>
            {/* <SiderTwo /> */}
        {/* </View> */}
       


    </View>
  )
}

export default LayerThree

const styles = StyleSheet.create({
    siderTextStyle: {
        flex: 1, color: Colors.WHITE 
    }
})