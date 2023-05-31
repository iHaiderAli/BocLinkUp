import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../styles'
import SvgContainer from './svgContainer'
import { SvgXml } from 'react-native-svg'

const LabelItem = ({ label, labelStyle, rightSvg, rightSvgSize }) => {
  return (
    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
      {
        rightSvg &&
        <SvgXml xml={rightSvg} width={rightSvgSize} height={rightSvgSize} style={{ marginRight: 10 }}
        />
      }
      <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
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