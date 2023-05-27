import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import DocsTab from './docsTab'
import MediaTab from './mediaTab'
import LinksTab from './linksTab'
import TabHeader from './tabHeader'
import { Layout } from '../../../styles'
import AbstractHeader from '../../../components/app/abstractHeader'


const ProfileTabs = () => {
    const Components = [{
        key: 1,
        title: 'MEDIA',
        comp: <MediaTab/>
    }, {
        key: 2,
        title: 'DOCS',
        comp: <DocsTab/>
    }, {
        key: 3,
        title: 'LINKS',
        comp: <LinksTab/>
    }]
    const [ tabs, setTabs ] = useState([...Components]);
    const [activeTab, setActiveTab]= useState(0);
  return (
    <ImageBackground style={styles.container}
        source={require("../../../../assets/images/backImage3.png")}
        resizeMode={'cover'}
    > 
    <View style={{...styles.container,
        // width: '100%'
        // width: Layout.WINDOW_WIDTH,
        // height: Layout.WINDOW_HEIGHT
    }}>
        <AbstractHeader />
        <TabHeader comps={Components}
        activeTab={tabs[activeTab]} setActiveTab={setActiveTab} />
        <View style={styles.container2} key={`${tabs[1].key}`}>
            {tabs[activeTab].comp}
        </View>
    </View>
    </ImageBackground>
  )
}

export default ProfileTabs

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
        flex: 1
    }
})