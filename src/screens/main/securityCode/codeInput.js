import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AbstractInput from '../../../components/app/abstractInput'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors } from '../../../styles'

const CodeInput = () => {
  return (
      <>
        <View style={{
            width: 295,
            left: 55
        }}>
            <Text style={styles.label}>Verify security code</Text>
            <Text style={styles.label}>You, Martha</Text>
        </View>
        <AbstractInput
            outerSvg={SVG_STRINGS.outerInput3()}
            height={85}
            width={320} 
        />
    </>
  )
}

export default CodeInput

const styles = StyleSheet.create({
    label: {
        color: Colors.WHITE,    
        fontSize: 12
    }
})