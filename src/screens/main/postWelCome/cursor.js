import { StyleSheet, Text, View , Animated, PanResponder} from 'react-native'
import React, { useRef, useCallback } from 'react'
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { cartesian2Canvas, canvas2Polar, polar2Canvas, usePanGestureHandler} from "react-native-redash";
import { Layout } from "../../../styles";

const cirleSize = 40;
const Cursor = ({ r, theta, storkeWidth, backgroundcolor }) => {
    const translationX = new Animated.Value(0);
    const state = new Animated.Value(State.UNDETERMINED);
    const gestureHandler = onGestureEvent({ translationX, state });
  return (
    <PanGestureHandler {...gestureHandler}>
        <Animated.View


            style={{
                width: 40,
                height: 40,
                backgroundColor: 'blue',
                transform: [
                    { translateX: translationXRef.current },
                    { translateY: translationYRef.current },
                    { perspective: 1000 }
                    // { rotate },
                ],
            }}
        />
    </PanGestureHandler>
  )
}

export default Cursor

const styles = StyleSheet.create({
    container: {
        // width: cirleSize, 
        // height: cirleSize,
        backgroundColor: 'blue',
        borderRadius: cirleSize /2
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
      }
})