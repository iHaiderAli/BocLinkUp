import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useEffect} from 'react'
import AbstractInput from '../../../components/app/abstractInput'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors, Layout, Typography } from '../../../styles'
import SvgContainer from '../../../components/app/svgContainer'
import AbstractButton from '../../../components/app/abstractButton'
import AbstractDropDown, { DROPDOWNTYPES } from '../../../components/app/dropDown'
import Routes from '../../../navigation/Routes'
const AccountDelete = ({ navigation }) => {
    const [ dropDownClose, setDropDownClose ] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate(Routes.USER_PROFILE_TAB)
    //     }, 5000);
      
    //     return () => {
          
    //     }
    //   }, [])
  return (
      <TouchableWithoutFeedback style={{flex: 1}}
        onPress={()=>setDropDownClose(!dropDownClose)}
      >
        <ImageBackground style={{flex: 1, justifyContent: 'center', alignItems :'center'}}
            source={require("../../../../assets/images/backImage2.png")}
            resizeMode={'cover'}
        > 
            <View style={{height: 200, alignItems: 'center'}}>
                <View style={styles.labelContainer}>
                    <SvgContainer
                        svg={SVG_STRINGS.warningIcon()}
                        size={24}
                    />
                    <Text style={styles.label}> Deleting your account will </Text>
                </View>

                <AbstractInput
                    outerSvg={SVG_STRINGS.outerInput4(Colors.DANGER_COLOR)}
                    height={100}
                    width={298}
                    _style={{top: 0, position: 'absolute', marginTop: 40}}
                    _inputContainer={styles.inputTextContainer}
                    withChild
                >
                    <Text key={'line1'} style={{...styles.label, color: Colors.WHITE}}> -Deleting your account From BOC linkup </Text>
                    <Text key={'line2'} style={{...styles.label, color: Colors.WHITE}}> -Erase your message history </Text>
                    <Text key={'line3'} style={{...styles.label, color: Colors.WHITE}}> -Delete you from all Boc linkup groups</Text>

                </AbstractInput>
            </View>


            <View style={{...styles.container2, flex: 1}}>
                <Text style={{...styles.label, color: Colors.WHITE}}>To delete your account, confirm your country code and enter your phone number.</Text>
                <View style={{height: 20}}/>
                <AbstractDropDown key={'country'} title={'Country'} type={DROPDOWNTYPES.COUNTRY}
                    _contianerStyle={{marginBottom: 20}}
                    forceClose={dropDownClose}
                    setDropDownClose={() => setDropDownClose(false)}
                />
                <AbstractDropDown key={'phone'} title={'Phone'} type={DROPDOWNTYPES.PHONE}
                    _contianerStyle={{marginBottom: 20}}
                    forceClose={dropDownClose}
                    setDropDownClose={() => setDropDownClose(false)}
                />
                <AbstractButton
                    label={'DELETE MY ACCOUNT'}
                    _style={{...styles.deleteCustomButton}}
                    labelStyle={{...styles.btnLabelStyle}}
                    height={35}
                />
                {/* <View style={{height: 100, backgroundColor: 'pink', width: '100%'}}/> */}
                
                <View style={styles.changeNumberContainer}>
                    <SvgContainer
                        svg={SVG_STRINGS.warningIcon()}
                        size={24}
                    />
                    <Text style={styles.label}> Deleting your account will </Text>
                </View>
                <AbstractButton
                    gradient
                    _style={{
                        width: Layout.WINDOW_WIDTH,
                        height: 50,
                        alignSelf: 'center',
                        blurRadius: 2,
                        // position: 'absolute', 
                        // bottom: 0,
                        // backgroundColor: 'red'
                    }}
                    outerHeight={50}
                    outerWidth={170}
                    outerSvg={SVG_STRINGS.buttonOuter2()}
                    label={'CHNAGE NUMBER'}
                    labelStyle={{
                        color: Colors.TEXT_COLOR_5,
                        fontSize: 12
                    }}
                    onPressButton={()=> navigation.navigate(Routes.USER_PROFILE_TAB)}
                />
            </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
  )
}

export default AccountDelete

const styles = StyleSheet.create({
    label: {
        color: Colors.DANGER_COLOR,
        fontSize: 12
    },
    labelContainer: {
        top: 0, 
        position: 'absolute',
        marginTop: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputTextContainer: {
        top: 0, 
        position: 'absolute', 
        marginTop: 20, 
        paddingHorizontal: 20, 
        height: 60
    },
    container2: {
        paddingHorizontal: 40,
        alignItems: 'center'
    },
    deleteCustomButton: {
        backgroundColor: Colors.DANGER_COLOR,
        width: Layout.WINDOW_WIDTH - (40 * 2)
    },
    btnLabelStyle:{
        color: Colors.BLACK_COLOR,
        fontFamily: Typography.CALIBRI_BOLD,
        fontSize: 12,
        fontWeight: 'bold'
    },
    changeNumberContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    }
})