import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import SvgContainer from './svgContainer'
import { Colors } from '../../styles'

const AbstractInput = ({
    _style, 
    outerSvg, 
    secureText, 
    height,
    width,
    value,
    textChanged,
    autoFocus,
    selectionColor,
    _styleText,
    _inputContainer,
    onBlur,
    keyboardType,
    numberoflines,
    multiline,
    withChild,
    children
}) => {
    const [textValue, setTextValue] = useState(value ?? '');
    const handleTextChange = (_text) => {
        if(secureText){
            setTextValue(_text)
            
        }else{
            setTextValue(_text)
        }
        textChanged && textChanged(_text)

    }
  return (
    <View style={{
        height: height ?? 99,
        width: width ?? 257, 
        ..._style
    }} >
       <View style={{width: '100%', height: '100%', 
            justifyContent :'center', color: Colors.BLACK_COLOR}}>
                {
                    outerSvg &&
                    <SvgContainer
                        svg={outerSvg}
                        width={width ?? '100%'}
                        height={height ?? 99}
                    />
                }
            <View style={{
                    position: 'absolute', zIndex: 2,
                        width:'100%',
                        height: '100%',
                        justifyContent:'center'
                }} >
                    <View style={{ 
                        width: '100%',
                        height: '100%',
                        ..._inputContainer
                        }}>
                            {
                                !withChild &&
                                <TextInput
                                    value={textValue}
                                    secureTextEntry={secureText}
                                    style={{
                                        textAlign: 'center',
                                        width:'100%',
                                        height: '100%',
                                        color: selectionColor ?? Colors.COLOR_INPUT_STROKE,
                                        paddingHorizontal: 30,
                                        
                                        ..._styleText
                                    }}
                                    onChangeText={handleTextChange}
                                    selectionColor={selectionColor ?? Colors.COLOR_INPUT_STROKE}
                                    autoFocus={autoFocus}
                                    onBlur={() => onBlur && onBlur()}
                                    keyboardType={keyboardType ?? "default"}
                                    numberOfLines={numberoflines ?? 1}
                                    multiline={multiline}
                                />
                            }
                            {withChild && children}
                    </View>
            </View>

       </View>
        
    </View>
  )
}

export default AbstractInput

const styles = StyleSheet.create({})