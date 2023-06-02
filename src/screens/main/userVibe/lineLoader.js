import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, {useEffect, useRef, useMemo} from 'react'
import { Colors } from '../../../styles'

const LineLoader = () => {
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.primary} />
                {/* <View style={styles.secondary} /> */}
                <View style={{...styles.secondary}}>
                    <Animated.View  style={{...styles.filled }} />
                    {/* <View  style={styles.nob} /> */}
                </View>
            </View>
        </>
    )
}

export default LineLoader

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: '100%',
        justifyContent: 'center'
    },
    primary: {
        height: 3,
        backgroundColor: Colors.WHITE,
        top: 0,
        width: '100%',
        borderRadius: 10,
        opacity: 0.5
    },
    secondary: {
        height: '100%',// '100%',
        width: 100,
        top: 0, 
        position: 'absolute', 
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    filled:{
        height: 3, 
        width: 100,
        borderRadius: 10,
        backgroundColor: Colors.WHITE, 
        position: 'absolute', 
        zIndex: 1
    },
    nob: {
        height: 10, width: 10,
        borderRadius: 10,
        backgroundColor: Colors.WHITE, 
        position: 'absolute', 
        zIndex: 1,
        left: 20
    }

})