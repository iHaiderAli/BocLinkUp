import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../styles';

const SiderWidth = 35;
const SiderOne = () => {
  return (
    <View style={{width: SiderWidth, height: 300, alignSelf:'center'}}>
    <View style={{height: 20, width: SiderWidth, borderColor: Colors.YELLOW, borderWidth: 1, borderBottomWidth: 0,}} />
    <View style={{ flex: 1, 
            // backgroundColor: 'red',
            alignItems: 'center', 
            justifyContent: ''
        }}>
        <Text style={styles.siderTextStyle}>R</Text>
        <Text style={styles.siderTextStyle}>E</Text>
        <Text style={styles.siderTextStyle}>M</Text>
        <Text style={styles.siderTextStyle}>O</Text>
        <Text style={styles.siderTextStyle}>V</Text>
        <Text style={styles.siderTextStyle}>E</Text>
        <Text style={styles.siderTextStyle}>{' '}</Text>
        <Text style={styles.siderTextStyle}>A</Text>
        <Text style={styles.siderTextStyle}>P</Text>
        <Text style={styles.siderTextStyle}>P</Text>
    </View>
    
    <View style={{height: 20, width: SiderWidth, borderColor: Colors.YELLOW, borderWidth: 1, borderTopWidth: 0,}} />
</View>
  )
}

export default SiderOne

const styles = StyleSheet.create({
    siderTextStyle: {
        flex: 1, color: Colors.WHITE 
    }
})