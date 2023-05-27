import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, {useEffect} from 'react'
import { Colors, Layout } from '../../../styles'
import AbstractInput from '../../../components/app/abstractInput'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import SvgContainer from '../../../components/app/svgContainer'
import LinearGradient from 'react-native-linear-gradient'
import AbstractButton from '../../../components/app/abstractButton'
import MyKeyboardAvoidView from '../../../components/app/myKeyboardAvoidingView'
import Routes from '../../../navigation/Routes'

const ReportProblem = ({ navigation }) => {
    useEffect(() => {
    setTimeout(() => {
        navigation.navigate(Routes.SECURITY_CODE)
    }, 3000);
    
      return () => {
        
      }
    }, [])
    
  return (
    <MyKeyboardAvoidView>
        <ImageBackground style={styles.container}
            source={require("../../../../assets/images/backImage2.png")}
            resizeMode={'cover'}
        > 
            <>
                <Text style={styles.label}>Describe your problem</Text>
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
                <View style={{height: 30}} />

                <Text style={styles.label}>Add screenshots (optional)</Text>
                <AbstractInput
                    outerSvg={SVG_STRINGS.outerInput2()}
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
                    withChild
                >
                    <View style={{
                        width: '100%', height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <SvgContainer
                        svg={SVG_STRINGS.plusIcon()}
                        size={40}
                        />
                        <SvgContainer
                            svg={SVG_STRINGS.plusIcon()}
                            size={40}
                        />
                        <SvgContainer
                            svg={SVG_STRINGS.plusIcon()}
                            size={40}
                        />
                        <SvgContainer
                            svg={SVG_STRINGS.plusIcon()}
                            size={40}
                        />
                    </View>
                </AbstractInput>

                <View style={{height: 100}} />

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
            </>
        </ImageBackground>
    </MyKeyboardAvoidView>
  )
}

export default ReportProblem

const styles = StyleSheet.create({
    label: {
        color: Colors.WHITE,
        fontSize: 10,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems :'center'
    }
})