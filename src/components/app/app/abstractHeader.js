import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgContainer from './svgContainer'
import { SVG_STRINGS } from '../../../assets/svgStrings'
import { Colors } from '../../styles'

const AbstractHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box2}>
            <SvgContainer
                svg={SVG_STRINGS.backIcon()}
                size={18}
            />
        </View>
        <View style={{...styles.centerBox, 
            alignItems: 'flex-start'
        }}>
            <Text style={styles.label}>Martha</Text>
        </View>
        <View style={styles.box2}>

        </View>
    </View>
  )
}

export default AbstractHeader

const styles = StyleSheet.create({
    container:{
        height: 70,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    box2:{
        flex: 1,
        justifyContent :'center',
        alignItems:'center'
    },
    centerBox: {
        flex: 5,
        justifyContent :'center',
        alignItems:'center'
    },
    label: {
        color: Colors.WHITE,
        fontSize: 24
    }
})