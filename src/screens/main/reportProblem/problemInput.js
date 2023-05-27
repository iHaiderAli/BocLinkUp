import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, {Path} from "react-native-svg";
import AbstractInput from '../../../components/app/abstractInput';
import { SVG_STRINGS } from '../../../../assets/svgStrings';
const ProblemInput = () => {
  return (
        <AbstractInput
            outerSvg={SVG_STRINGS.outerInput()}
            width={295}
            height={80}
            numberoflines={3}
            lineHeight={10}
            _styleText={{lineHeight: 15, alignSelf: 'center', fontSize: 10,
            textAlignVertical: 'top',
            textAlign: 'left'
        }}
            multiline
            _inputContainer={{heihgt: 50}}
            _style={{alignSelf :'center'}}
        />
  )
}

export default ProblemInput

const styles = StyleSheet.create({})