import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, {useEffect} from 'react'
import AbstractInput from '../../../components/app/abstractInput'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors, Layout, Typography } from '../../../styles'
import SvgContainer from '../../../components/app/svgContainer'
import LinearGradient from 'react-native-linear-gradient'
import AbstractButton from '../../../components/app/abstractButton'
import MyKeyboardAvoidView from '../../../components/app/myKeyboardAvoidingView'
import CodeInput from './codeInput'
import Routes from '../../../navigation/Routes'

const SecurityCode = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(Routes.SECURITY_SCREEN)
        }, 3000);
        
          return () => {
            
          }
        }, [])
    return(
    <MyKeyboardAvoidView >

    <ImageBackground style={{ flex: 1 }}
        source={require("../../../../assets/images/backImage2.png")}
        resizeMode={'cover'}
    >
        <View style={{flex: 1, alignItems: 'center'}}>
            {/* SECURITY_CODE INPUT */}
            <CodeInput />
            <View style={{flex: 1, alignItems: 'center', justifyContent :'center'}}>
                <Image
                    source={require("../../../../assets/images/securityCode.png")}
                    style={{
                        width: 342,
                        height: 220,
                        left: 10
                    }} 
                        resizeMode='cover'
                />
                <View style={{ marginTop: -75, 
                    // backgroundColor: 'pink' 
                    }}>
                    <SvgContainer
                        svg={SVG_STRINGS.bordersColumns()}
                        width={300}
                        height={214}
                        // _style={{backgroundColor: 'pink'}}
                    />
                    <View style={{
                        height: 100,
                        width: 225,
                        // backgroundColor: 'red',
                        position: 'absolute',
                        zIndex: 1,
                        bottom: 30,
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {[{}, {}, {}, {}].map((ls, index) => 
                            <View key={`${index}`} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.label}>12345</Text>
                                <Text style={styles.label}>12345</Text>
                                <Text style={styles.label}>12345</Text>
                                <Text style={styles.label}>12345</Text>
                            </View>
                        )}
                    </View>
                </View>

                <AbstractInput
                        outerSvg={SVG_STRINGS.outerInput4()}
                        width={330}
                        height={120}
                        _style={{ marginTop: -20}}
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
        </View>
    </ImageBackground>
    </MyKeyboardAvoidView>
)
}

export default SecurityCode

const styles = StyleSheet.create({
    label: {
        color: Colors.WHITE,    
        fontSize: 12
    }
})