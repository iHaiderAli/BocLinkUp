import { StyleSheet, Text, View, Animated } from 'react-native'
import React, {useRef, useEffect} from 'react'
import  Svg, { Circle, G} from "react-native-svg";
const CircleComp = () => {
    const size = 200;
    const strokeWidth = 40;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    // const offset = useRef(new Animated.Value(0)).current;
    const spinOff = useRef(new Animated.Value(0)).current;
    const rotation = spinOff.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const loopAnimation =()=>{
        Animated.loop(
            Animated.timing(spinOff, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: true
            })
          ).start(() => loopAnimation() );
    }
    useEffect(() => {
        loopAnimation()
    
      return () => {
        // second
      }
    }, [])
    
  return (
    <View style={{backgroundColor: 'pink', justifyContent :'center', alignItems: 'center'}}>
        <Animated.View
            style={{transform: [{rotate: rotation}] }}
        >
           
            <Svg 
                height={size}
                width={size}
                style={{justifyContent :'center', alignItems: 'center'}}
            >
                    <Circle
                        stroke={"red"}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    >
                        <Text>5</Text>
                    </Circle>
        
         </Svg>
        </Animated.View>
    </View>
  )
}

export default CircleComp

const styles = StyleSheet.create({})