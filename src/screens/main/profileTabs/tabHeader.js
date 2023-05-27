import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../../styles'

const TabHeader = ({ comps, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container} >
      {comps?.map( (item, index)=>
        <TouchableOpacity 
            key={`key_${index}`}
            onPress={()=> setActiveTab(index)}
            style={
                activeTab?.key == item.key ?
                {...styles.titleView, ...styles.activeTab} : 
                {...styles.titleView}
            }
            >
            <Text style={
                // activeTab?.key == item.key ?
                // {...styles.title, ...styles.activeTab}:
                {...styles.title}
            }>{item?.title}</Text>
        </TouchableOpacity>
         )}
    </View>
  )
}

export default TabHeader

const styles = StyleSheet.create({
    title: {
        color: Colors.WHITE,
        fontSize: 16,
        paddingHorizontal: 10
    },
    container: {
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: 10,
        // backgroundColor: 'red'
    },
    titleView: {
        flex: 1,
        justifyContent :'center', alignItems :'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.WHITE
    }
})