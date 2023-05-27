import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../styles'
import SvgContainer from './svgContainer'

const LabelItem = ({label, labelStyle, rightSvg, rightSvgSize}) => {
  return (
    <View style={{flexDirection: 'row',alignItems: 'center'}}>
      {
        rightSvg &&
          <SvgContainer
            svg={rightSvg}
            size={ rightSvgSize ?? labelStyle?.fontSize ?? styles.label?.fontSize ?? 12}
            _style={{marginRight: 5 }}
            // marginBottom: 3
          />
      }
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
    </View>
  )
}

export default LabelItem

const styles = StyleSheet.create({
    label: {
        color: Colors.WHITE,
        fontSize: 10,
    }
})