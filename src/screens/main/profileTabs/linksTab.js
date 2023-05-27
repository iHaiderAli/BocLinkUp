import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Colors, Layout } from '../../../styles';
import mystyle from './mystyle';

const ROW_HEIGHT= 60;
const RenderItem= () => {
    return (
        <View style={styles.row}>
            <View style={{...styles.rowStyle, width: 50}}>
                <View style={{height: 43, width: 43, backgroundColor: '#232323'}}/>
            </View>
            <View style={{flex: 5, justifyContent :'center'}}>
                <Text style={{...styles.label, fontSize: 14}}>ABC123123123</Text>
                <Text style={{...styles.label, color :Colors.WHITE, fontSize: 10}}>ABC123123123</Text>
                <Text style={{...styles.label, color :Colors.WHITE, fontSize: 10}}>7 Pages   530kb   PDF</Text>
            </View>
            <View style={{...styles.rowStyle}}>
                {/* <Text style={{...styles.label, color :Colors.WHITE, fontSize: 12}}>01-01-01</Text> */}
            </View>
        </View>

    )
}

const LinksTab = () => {
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column'}}>
    <Text style={{...mystyle.label, left: 10, marginBottom: 15, }}>TODAY</Text>
    <FlatList
        key={'today_list'}
        data={[{}, {}, {}]}
        contentContainerStyle={styles.container}
        // columnWrapperStyle={{
        //     // justifyContent: 'space-around',
        //     // alignItems: 'flex-start'
        // }}
        // numColumns={3}
        renderItem={({ item, index }) => <>
            <RenderItem />
        </>
        }
    />

    <View style={{height: 20}} />
    <Text style={{...mystyle.label, left: 10, marginBottom: 15}}>LAST WEEK</Text>
    <FlatList
        key={'lastweek_list'}
        data={[{}, {}, {}]}
        contentContainerStyle={styles.container}
        // columnWrapperStyle={{
        //     // justifyContent: 'space-around'
        // }}
        // numColumns={3}
        renderItem={({ item, index }) => <>
            <RenderItem />
        </>
        }
    />
    <View style={{height: 20}} />
    <Text style={{...mystyle.label, left: 10, marginBottom: 15}}>LAST MONTH</Text>
    <FlatList
        key={'lastmonth_list'}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        contentContainerStyle={styles.container}
        // columnWrapperStyle={{
        //     // justifyContent: 'space-around'
        // }}
        // numColumns={3}
        renderItem={({ item, index }) => <>
           <RenderItem />
        </>
        }
    />

</ScrollView>
  )
}

export default LinksTab

const styles = StyleSheet.create({
    itemStyle: {
        width: (Layout.WINDOW_WIDTH / 3) - 20,
        height: (Layout.WINDOW_WIDTH / 3) - 20,
        backgroundColor: '#232323',
        marginHorizontal: 10,
        marginBottom: 20
        // right: 10,
        // left: 10
    },
    row:{
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        width: '100%',
        height: ROW_HEIGHT,
    },
    rowStyle:{
        width: 100, height: ROW_HEIGHT, justifyContent :'center'
    },
    label:{
        color: Colors.YELLOW,
        fontSize: 16
    }
})