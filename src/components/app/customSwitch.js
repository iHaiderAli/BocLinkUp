import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useMemo } from 'react'
import { Colors } from '../../styles'

const CustomSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <Animated.View style={{justifyContent :'center'}}>
            <View style={{height: 8, width: 50, backgroundColor: Colors.WHITE, opacity: 0.3}} />
                <TouchableOpacity onPress={() => setEnabled(!enabled)} disabled={enabled} style={{height: 10, width: 25, backgroundColor: Colors.WHITE, position: 'absolute', zIndex: 1, alignSelf: 'flex-start', 
                    opacity: enabled ? 1 : 0
                }} /> 
                <TouchableOpacity onPress={() => setEnabled(!enabled)} disabled={!enabled} style={{height: 10, width: 25, backgroundColor: Colors.WHITE, position: 'absolute', zIndex: 1, alignSelf: 'flex-end',
                    opacity: !enabled ? 1 : 0
                }} />
        </Animated.View>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})