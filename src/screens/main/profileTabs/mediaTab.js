import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Layout } from '../../../styles'
import mystyle from './mystyle'
const MediaTab = () => {
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
         <View style={{height: 20}} />
        <Text style={{...mystyle.label, left: 10, marginBottom: 15}}>TODAY</Text>
        <FlatList
            key={'today_list'}
            data={[{}]}
            contentContainerStyle={styles.container}
            columnWrapperStyle={{
                // justifyContent: 'space-around',
                // alignItems: 'flex-start'
            }}
            numColumns={3}
            renderItem={({ item, index }) => <>
                <View key={`today_${index}`} style={styles.itemStyle}/>
            </>
            }
        />

        {/* <View style={{height: 20}} /> */}
        <Text style={{...mystyle.label, left: 10, marginBottom: 15}}>LAST WEEK</Text>
        <FlatList
            key={'lastweek_list'}
            data={[{}, {}, {}]}
            contentContainerStyle={styles.container}
            columnWrapperStyle={{
                // justifyContent: 'space-around'
            }}
            numColumns={3}
            renderItem={({ item, index }) => <>
                <View key={`lastweek_${index}`} style={styles.itemStyle}/>
            </>
            }
        />
        {/* <View style={{height: 20}} /> */}
        <Text style={{...mystyle.label, left: 10, marginBottom: 15}}>LAST MONTH</Text>
        <FlatList
            key={'lastmonth_list'}
            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
            contentContainerStyle={styles.container}
            columnWrapperStyle={{
                // justifyContent: 'space-around'
            }}
            numColumns={3}
            renderItem={({ item, index }) => <>
                <View key={`lastmonth_${index}`} style={styles.itemStyle}/>
            </>
            }
        />

    </ScrollView>
  )
}

export default MediaTab

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 20,
        // justifyContent: 'space-around'
        // alignItems: 'flex-start'
    },
    itemStyle: {
        width: (Layout.WINDOW_WIDTH / 3) - 20,
        height: (Layout.WINDOW_WIDTH / 3) - 20,
        backgroundColor: '#232323',
        marginHorizontal: 10,
        marginBottom: 20
        // right: 10,
        // left: 10
    }
})