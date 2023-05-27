import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Layout } from '../../../styles'
import CustomToggler from '../../../components/app/customToggler'
import AbstractButton from '../../../components/app/abstractButton'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur'
const ChangeNumber = () => {
    
  return (
      <ImageBackground style={{flex: 1, justifyContent: 'center', alignItems :'center'}}
        source={require("../../../../assets/images/backImage2.png")}
        resizeMode={'cover'}
      > 
            <Image
                source={require("../../../../assets/images/changeNumber.png")}
                style={{width: 342, height: 342, marginBottom: 10 }}
            />

          <Text style={{...styles.textStyle, marginTop: -40}}>
            Changin your Phone number will migrate your{'\n'}account info, groups and settings.
          </Text>
                <View style={{height: 10}} />
          <Text style={{...styles.textStyle, opacity: 0.35}}>
           Before proceeding, please confirm tht you are able{'\n'}to recevice SMS or calls at your new number.
          </Text>
            <View style={{height: 10}} />
          <Text style={{...styles.textStyle, opacity: 0.35}}>
            If you have both a new Phone {'&'} a new number, first{'\n'}change your number on your old phone.
          </Text>

            <CustomToggler
                _styleOuter={{ marginTop: 40 }}
                label="DISABLED"
            />

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
                                label={'RESTORE PREVIOUS'}
                                labelStyle={{
                                    color: Colors.TEXT_COLOR_5,
                                    fontSize: 12
                                }}
                            />

            {/* <View>

          
                <LinearGradient 
                    colors={[ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(211, 170, 66, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)',]} 
                    angle={90}
                    useAngle={true}
                    start={{ x: 0, y: 0 }}
                    // locations={[0, 0]}
                    end={{ x: 1, y: 1 }}
                    
                    style={{
                        alignItems:'center'
                    }}>
                            <AbstractButton
                                _style={{
                                    width: Layout.WINDOW_WIDTH,
                                    height: 100,
                                    alignSelf: 'center',
                                    blurRadius: 2
                                    // backgroundColor: 'red'
                                }}
                                outerHeight={50}
                                outerWidth={170}
                                outerSvg={SVG_STRINGS.buttonOuter2()}
                                label={'RESTORE PREVIOUS'}
                                labelStyle={{
                                    color: Colors.TEXT_COLOR_5,
                                    fontSize: 12
                                }}
                            />

                </LinearGradient>
            </View> */}
                  
      </ImageBackground>
    
  )
}

export default ChangeNumber

const styles = StyleSheet.create({
    circleView: {
        justifyContent: 'center', alignItems: 'center',  marginTop: -40
    },
    circleContentView: {
        flexDirection: 'row',  
                position: 'absolute',
                alignSelf: 'center',
    },
    circleIconStyle: {
        height: 65,
        width: 50,
        backgroundColor: '#F8DC78',
        borderRadius: 5,
        justifyContent :'center'
    },
    circleIconConatiner: {
        width: 30, justifyContent: 'center', flexDirection: 'row'
    },
    circleIconSeparator: {
        color:  "#F8DC78",
        fontSize: 20,
        alignSelf: 'center'
    },

    textStyle: {
        color: Colors.TEXT_COLOR_5,
        fontSize: 10,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 16,

        textShadowColor: Colors.TEXT_COLOR_5,
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 5,
        shadowOpacity: 0.8
    },
    enablerTextView: {
        height: 80,
        width: 280,
        position: 'absolute',
        zIndex: 2,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    enablerTextStyle: {
        color: Colors.WHITE,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,

        textShadowColor: Colors.WHITE,
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 5,
        shadowOpacity: 0.8
    },


    triangleCorner: {
        // width: 0,
        // height: 0,
        borderTopWidth: 0,
        borderBottomWidth: 30,
        borderColor:  'red',
        backgroundColor: "red",
        // borderStyle: "solid",
        // borderRightWidth: 100,
        // borderTopWidth: 100,
        // borderRightColor: "transparent",
        // borderTopColor: "red",
      },
      linearGradient: {
        // flex: 1,
        // padding: 10,
        height: 124
        // paddingLeft: 15,
        // paddingRight: 15,
        // borderRadius: 5
      },
})

{/* <View style={styles.circleView}>
<Image
    source={require("../../../../assets/images/backCircleTicker.png")}
    style={{width: 342, height: 342 }}
/>
<View style={styles.circleContentView}>
    {/* Icon Box 1  

    <View style={styles.circleIconStyle}>
            <View style={{ color: 'transparent', justifyContent :'center' }}>
            <Text style={{
                fontSize: 25,
                textAlignVertical: 'center',
                alignSelf:'center',
                justifyContent: 'space-evenly',
            }}>Doc</Text>
            <Text style={{
                fontSize: 10,
                textAlignVertical: 'center',
                alignSelf:'center',
                justifyContent: 'space-evenly',
            }}>Icon</Text>
            </View>
    </View> 
    {/* sepearator     
    <View style={styles.circleIconConatiner}>
        <Text style={styles.circleIconSeparator}>-</Text>
        <Text style={styles.circleIconSeparator}>-</Text>
        <Text style={styles.circleIconSeparator}>-</Text>
        <Text style={styles.circleIconSeparator}>-</Text>
    </View>
    {/* Icon Box 2   
    <View style={styles.circleIconStyle}>
            <View style={{ color: 'transparent', justifyContent :'center' }}>
            <Text style={{
                fontSize: 25,
                textAlignVertical: 'center',
                alignSelf:'center',
                justifyContent: 'space-evenly',
            }}>Doc</Text>
            <Text style={{
                fontSize: 10,
                textAlignVertical: 'center',
                alignSelf:'center',
                justifyContent: 'space-evenly',
            }}>Icon</Text>
            </View>
    </View>            
</View>


</View> */}