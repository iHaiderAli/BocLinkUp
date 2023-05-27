import { StyleSheet, Text, View, Animated } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { Colors } from '../../../styles';
import SvgContainer from '../../../components/app/svgContainer';
import { SVG_STRINGS } from '../../../../assets/svgStrings';




const TestList = ({ circleSize, itemSize }) => {
    const CIRCLE_SIZE = circleSize ?? 280;
    const ITEM_SIZE= itemSize ?? 50;
    const spinOff = useRef(new Animated.Value(0)).current;
    const rotation = spinOff.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const loopAnimation =()=>{
        Animated.loop(
            Animated.timing(spinOff, {
              toValue: 1,
              duration: 2500,
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
    <View style={{
        flex :1
    }}>
        <Animated.View 
            style={{height: CIRCLE_SIZE, width: CIRCLE_SIZE, 
                // backgroundColor: 'pink', 
                borderRadius: CIRCLE_SIZE / 2, 
            transform: [{rotate: rotation}]
        }}
            >
                {/* 3  */}
                <View style={{
                    ...styles.nobe, 
                    right: 0, width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2,
                    top: (CIRCLE_SIZE / 2 ) - (ITEM_SIZE / 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.chatIcon()}
                        size={18}
                    />
                    </View>
                {/* 12 */}
                <View style={{...styles.nobe, 
                    right:(CIRCLE_SIZE / 2 ) -( ITEM_SIZE / 2), width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2,
                    top: 0
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.keyIcon()}
                        size={18}
                    />
                </View>
                {/* 9 */}
                <View style={{...styles.nobe, 
                    left: 0, width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2,
                    top: (CIRCLE_SIZE / 2 ) - (ITEM_SIZE / 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.bellIcon()}
                        size={18}
                    />
                </View>
                {/* 6 */}
                <View style={{
                    ...styles.nobe, 
                    right:(CIRCLE_SIZE / 2 ) -( ITEM_SIZE / 2), width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2,
                    bottom: 0
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.penIcon()}
                        size={18}
                    />
                </View>

                {/* 4-5 */}
                <View style={{
                    ...styles.nobe, 
                    right:(CIRCLE_SIZE / (4 * 2) ), 
                    width: ITEM_SIZE, height: ITEM_SIZE, 
                    borderRadius: ITEM_SIZE / 2,
                    bottom: CIRCLE_SIZE / (4 * 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.dataIcon()}
                        size={18}
                    />
                </View>

                {/* 7-8 */}
                <View style={{
                    ...styles.nobe, 
                    left:(CIRCLE_SIZE / (4 * 2) ), 
                    width: ITEM_SIZE, height: ITEM_SIZE, 
                    borderRadius: ITEM_SIZE / 2,
                    bottom: CIRCLE_SIZE / (4 * 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.chatIcon()}
                        size={18}
                    />
                </View>

                {/* 10-11 */}
                <View style={{...styles.nobe, 
                    left:(CIRCLE_SIZE / (4 * 2) ), 
                    width: ITEM_SIZE, height: ITEM_SIZE, 
                    borderRadius: ITEM_SIZE / 2,
                    top: CIRCLE_SIZE / (4 * 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.helpIcon()}
                        size={18}
                    />
                </View>

                 {/* 1-2 */}
                 <View style={{...styles.nobe, 
                    right:(CIRCLE_SIZE / (4 * 2) ), 
                    width: ITEM_SIZE, height: ITEM_SIZE, 
                    borderRadius: ITEM_SIZE / 2,
                    top: CIRCLE_SIZE / (4 * 2)
                }} >
                    <SvgContainer
                        svg={SVG_STRINGS.chatIcon()}
                        size={18}
                    />
                </View>

        </Animated.View>
    </View>
  )
}

export default TestList;


const styles = StyleSheet.create({
    nobe: {
        position: 'absolute', zIndex: 1, 
        // backgroundColor: 'red', 
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.BLACK_COLOR,
        justifyContent :'center', alignItems: 'center'
    }
})