import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import MyKeyboardAvoidView from '../../../components/app/myKeyboardAvoidingView'
import { Colors } from '../../../styles'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import AbstractInput from '../../../components/app/abstractInput'
import CustomSwitch from '../../../components/app/customSwitch'

const SecurityScreen = () => {
    const [ enabled, setEnabled ] = useState(false);
  return (
    <MyKeyboardAvoidView >
        <ImageBackground style={{ flex: 1 }}
            source={require("../../../../assets/images/backImage2.png")}
            resizeMode={'cover'}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent :'center'}}>
                <Image
                    source={require("../../../../assets/images/security.png")}
                    style={{
                        // width: 342,
                        // height: 220,
                        // backgroundColor: 'pink'
                    }} 
                />
                <View style={styles.container2}>
                    <SvgContainer
                        svg={SVG_STRINGS.borderColumns2()}
                        width={380}
                        height={264}
                    />
                    <View style={styles.textContainer}>
                        <Text style={{...styles.label, textAlign: 'center'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>
                    </View>
                </View>
                <AbstractInput
                        outerSvg={SVG_STRINGS.outerInput4()}
                        width={330}
                        height={120}
                        // _style={{ backgroundColor: 'red' }}
                        value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                        numberoflines={3}
                        multiline
                        lineHeight={10}
                        _styleText={{
                            lineHeight: 28, alignSelf: 'center', 
                            fontSize: 12,
                            textAlignVertical: 'top',
                            textAlign: 'left',
                            paddingVertical: 20
                        }}
                />
                <View style={{width: 330, alignItems: 'center', zIndex: 999}}>
                    <View style={{left: 83, top: -5}}>
                        <CustomSwitch />
                    </View>
                </View>
            </View>

            
        </ImageBackground>
    </MyKeyboardAvoidView>
  )
}

export default SecurityScreen


const styles = StyleSheet.create({
    label: {
        color: Colors.WHITE,    
        fontSize: 12
    },
    container2: {
        // backgroundColor: 'blue', 
        top: -130, alignSelf: 'center', 
        alignItems: 'center',
        height: 123
    },
    textContainer: {
        // backgroundColor: 'red', 
        width: 260,
        top: -150
    }
})