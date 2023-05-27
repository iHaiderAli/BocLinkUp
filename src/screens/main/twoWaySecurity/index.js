import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors } from '../../../styles'
import CustomToggler from '../../../components/app/customToggler'
import Routes from '../../../navigation/Routes'

const TwoWaySecurity = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.ACCOUNT_REPORT)
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
        source={require("../../../../assets/images/twoWaySecurity.png")}
        style={{width: 342, height: 342, 
          marginBottom: 10
        }}
      />

        <Text style={{...styles.textStyle, marginTop: -40}}>
            For added security, enable two-step verification{'\n'}which will require a PIN when registering your phone{'\n'}number with GT Force again
        </Text>
        <View style={{height: 40}} />
        <CustomToggler />
            
      </ImageBackground>
    
  )
}

export default TwoWaySecurity

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.TEXT_COLOR_5,
        fontSize: 10,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 20,

        textShadowColor: Colors.TEXT_COLOR_2,
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 5,
        shadowOpacity: 0.8
    },
    
})

{/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
<Image
  source={require("../../../../assets/images/backCircleTicker.png")}
  style={{width: 342, height: 342, 
  }}
/>
 <View style={{
      height: 40,
      width: 100,
      position: 'absolute',
      alignSelf: 'center',
       backgroundColor: '#F8DC78',
          borderRadius: 5,
          justifyContent :'center'
  }}>
   <View style={{ color: 'transparent', justifyContent :'center' }}>
       <Text style={{
          fontSize: 38,
          textAlignVertical: 'center',
          alignSelf:'center',
          justifyContent: 'space-evenly',
          // letterSpacing: 10
      }}>* * *</Text>
      </View>
  </View> 
      

</View> */}