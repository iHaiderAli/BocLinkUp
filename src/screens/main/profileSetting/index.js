import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import MyKeyboardAvoidView from '../../../components/app/myKeyboardAvoidingView'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import AbstractInput from '../../../components/app/abstractInput'
import CircleView from './circle'
import AbstractButton from '../../../components/app/abstractButton'
import { Colors, Layout } from '../../../styles'

const ProfileSetting = () => {
  return (
    <MyKeyboardAvoidView>
        <ImageBackground style={{ flex: 1 }}
            source={require("../../../../assets/images/backImage2.png")}
            resizeMode={'cover'}
        >
            <View style={{ flex: 1}}>
               <CircleView />
               
            </View>
                            <AbstractButton
                                gradient
                                _style={{
                                    width: Layout.WINDOW_WIDTH,
                                    height: 100,
                                    alignSelf: 'center',
                                    blurRadius: 2,
                                    position: 'absolute', 
                                    bottom: 0
                                    // backgroundColor: 'red'
                                }}
                                outerHeight={50}
                                outerWidth={170}
                                outerSvg={SVG_STRINGS.buttonOuter2()}
                                label={'NEXT'}
                                labelStyle={{
                                    color: Colors.TEXT_COLOR_5,
                                    fontSize: 12
                                }}
                            />

            
        </ImageBackground>
    </MyKeyboardAvoidView>
  )
}

export default ProfileSetting

const styles = StyleSheet.create({})