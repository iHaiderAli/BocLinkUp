import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors } from '../../../styles'
const BackLayerOne = () => {
  return (
        <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <SvgContainer
                        svg={SVG_STRINGS.backLayerOneIconOne()}
                        size={'100%'}
                    />
                </View>

                <View style={{flex: 2.2}}/>

                <View style={{flex: 1}}>
                    <SvgContainer
                        svg={SVG_STRINGS.backLayerOneIconTwo()}
                        size={'100%'}
                    />
                </View>
        </View>
  )
}

export default BackLayerOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK_COLOR
    }
})