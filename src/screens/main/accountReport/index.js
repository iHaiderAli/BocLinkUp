import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { Colors } from '../../../styles'
import Routes from '../../../navigation/Routes'

const AccountReport = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.CHANGE_NUMBER_SCENE)
    }, 3000);
  
    return () => {
      // second
    }
  }, [])
  return (
      <ImageBackground style={{flex: 1, justifyContent: 'center', alignItems :'center'}}
        source={require("../../../../assets/images/backImage2.png")}
        resizeMode={'cover'}
      > 
          <Image
            source={require("../../../../assets/images/accountReport.png")}
            style={{width: 342, height: 342, marginBottom: 10 }}
          />

          <Text style={{...styles.textStyle, marginTop: -40}}>
            Create a report for GT Force account{'\n'}information and settings. Which you can access or{'\n'}port to another app. This report does not include{'\n'}your messages. <Text style={{color: Colors.WHITE, fontWeight: 'bold'}}>Learn more</Text>
          </Text>
                <View style={{height: 10}} />
          <Text style={{...styles.textStyle, color: Colors.WHITE, textShadowColor: Colors.WHITE}}>
           Your report will be readyin about 3 days, You'll have{'\n'}a few weeks to download your report after it's{'\n'}availible.
          </Text>
                <View style={{height: 10}} />
          <Text style={{...styles.textStyle, color: Colors.WHITE, textShadowColor: Colors.WHITE}}>
            Youer request will be canceled if you make changes to{'\n'}your account souch as changing your number or{'\n'}deleting your account.
          </Text>



           
            
      </ImageBackground>
    
  )
}

export default AccountReport

const styles = StyleSheet.create({
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
    }
})

{/* <View style={{justifyContent: 'center', alignItems: 'center',  marginTop: -40}}>
<Image
  source={require("../../../../assets/images/backCircleTicker.png")}
  style={{width: 342, height: 342 }}
/>
 <View style={{
      height: 80,
      width: 65,
      position: 'absolute',
      alignSelf: 'center',
       backgroundColor: '#F8DC78',
          borderRadius: 5,
          justifyContent :'center'
  }}>
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
      

</View> */}