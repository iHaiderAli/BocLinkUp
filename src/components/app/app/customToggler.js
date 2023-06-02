import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../styles'
import CustomSwitch from './customSwitch';

const CustomToggler = ({label, _styleOuter}) => {
    const [enabled, setEnabled] = useState(false);
  return (
      <View style={{
          height: 100,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          ..._styleOuter
      }}>
        {/* back Layer Image  */}
        <Image
            source={require("../../../assets/images/backLayerInput.png")}
            style={{
                height: 80,
                width: 280
            }}
            resizeMode='stretch'
        />
        {/* Layer over Back Image  */}
          <View style={styles.enablerTextView} >
                    <View style={{flex: 1, justifyContent :'center', alignItems:'flex-start', left: 30}}>
                        <Text style={styles.enablerTextStyle}>{label ?? 'EnableD'}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent :'center', alignItems: 'flex-end', right: 30}}>
                    
                          {/* toogler design  */}
                          <CustomSwitch 
                            // setEnabled={setEnabled}
                            // enabled={enabled}
                          />
                      
                        {/* </View> */}
                    </View>
          </View>
    </View>
  )
}

export default CustomToggler

const styles = StyleSheet.create({
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