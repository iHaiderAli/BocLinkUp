import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'

const BackLayerTwo = () => {
  return (
    <View style={{flex: 1}}>
      <SvgContainer
        svg={SVG_STRINGS.backLayerTwoIconOne()}
        size={'100%'}
        _style={{flex: 1}}
      />
    </View>
  )
}

export default BackLayerTwo

const styles = StyleSheet.create({})