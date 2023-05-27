import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircleComp from './circleComp'
import CircularList from './circularList'
import TestList from './testList'

const ContactProfileScreen = () => {
  return (
    <View style={styles.container}>
        {/* <CircleComp /> */}
        {/* <CircularList /> */}
        <TestList />
    </View>
  )
}

export default ContactProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent :'center',
        alignItems: 'center'
    }
})