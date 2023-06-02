import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgContainer from './svgContainer'
import LabelItem from './labelItem'
import LinearGradient from 'react-native-linear-gradient'
import AbstractInput from './abstractInput'

const AbstractButton = ({
    height, 
    width,
    label,
    labelStyle,
    rightSvg,
    rightSvgSize,
    icons,
    iconSize,
    iconPaddingHorizontal,
    onPressIcon,
    outerSvg,
    _style,
    onPressButton,
    gradientColors,

    openInput,
    inputTextStyle,
    keyboardType,
    selectionColor,
    onBlurInput,
    setInputValue,
    inputValue,
    isdisabled,
    outerHeight,
    outerWidth,
    gradient
}) => {

    const handlePressButton = () => {
        onPressButton && onPressButton()
    }
  return (
    <TouchableOpacity 
        disabled={isdisabled}
<<<<<<< HEAD
        onPress={handlePressButton} style={{
            height: height ?? 99,
            width: width ?? 257, 
            ..._style
        }} >
=======
    onPress={handlePressButton} style={{
        height: height ?? 99,
        width: width ?? 257, 
        ..._style
    }} >
>>>>>>> develop
        {
            gradient &&
            <LinearGradient

                        colors={[ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']} 
                        angle={90}
                        useAngle={true}
                        start={{ x:  0, y: 0 }}
                        // locations={[0, 0]}
                        end={{ x: 1, y: 1 }}
                        style={{
                            alignItems:'center',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            zIndex: 1
                        }}
            >
            </LinearGradient>

        }
        <View style={{width: '100%', height:'100%', justifyContent :'center', position: 'absolute',
                zIndex: 2}}>
                <SvgContainer
                    svg={outerSvg}
                    // size={250}
                    height={ outerHeight ?? 100}
                    width={ outerWidth ?? 300}
                    _style={{alignSelf: 'center'}}
                />
                <View style={{position: 'absolute', zIndex: 2, alignItems: 'center', alignSelf: 'center', justifyContent :'center'}} >
                    {
                        openInput == true &&
                        <AbstractInput
                            _styleText={{...inputTextStyle}}
                            keyboardType={keyboardType}
                            selectionColor={selectionColor}
                            onBlur={onBlurInput}
                            textChanged={setInputValue}
                            autoFocus
                            _style={{
                                // backgroundColor: 'red'
                            }}
                            value={inputValue ?? ''}
                        />
                    }
                    {
                        !openInput == true &&
                        <>
                            {   icons &&
                                <>
                                <View style={{flexDirection: 'row'}}>
                                    {
                                        icons?.map( (ls, index) =>
                                        <TouchableOpacity key={`key_btn_${index}`} onPress={() => onPressIcon(index+1)}>
                                            <SvgContainer
                                                svg={ls}
                                                size={iconSize ?? 14.5}
                                                _style={{paddingHorizontal: iconPaddingHorizontal ?? 20}}
                                            />
                                        </TouchableOpacity>
                                        )
                                    }
                                </View>
                                <View style={{height: 10}} />
                                </>
                            }
                            {
                                label && 
                                <LabelItem rightSvgSize={rightSvgSize} rightSvg={rightSvg} label={label} labelStyle={{...labelStyle}} />
                            }
                        </>
                    }
                </View>

        </View>
   
        
    </TouchableOpacity>
  )
}

export default AbstractButton

const styles = StyleSheet.create({
})