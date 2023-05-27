import { StyleSheet, Text, View, Animated, Pressable } from 'react-native'
import React, {useRef, useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const CircularList = () => {
    const [data, setData] = useState([
        { "id": 0, "value": "C1CD2F", "name": 'Football' },
        { "id": 1, "value": "360EF5", "name": 'Salsa' },
        { "id": 2, "value": "51BB75", "name": 'Chess' },
        { "id": 3, "value": "340A57", "name": 'Snooker' },
        { "id": 4, "value": "99E11F", "name": 'Dancing' },
        { "id": 5, "value": "937F07", "name": 'Coding' },
        { "id": 6, "value": "A341B9", "name": 'Dating' },
        { "id": 7, "value": "BC8BFB", "name": 'Making' },
        { "id": 8, "value": "ADC304", "name": 'Cars Show' },
        { "id": 9, "value": "4496C2", "name": 'Race' },
        { "id": 10, "value": 'A0B2BC', "name": 'Cooking' },
        { "id": 11, "value": "DC4460", "name": 'Riding' },
        { "id": 12, "value": "E391CA", "name": 'Cinema' },
        { "id": 13, "value": '707500', "name": 'Dancing' },
        { "id": 14, "value": "ADA323", "name": 'Football' },
        { "id": 15, "value": "D18572", "name": 'Coding' },
        { "id": 16, "value": 'A341B9', "name": 'Fitness' },
      ])

      const ITEM_SIZE = wp(30);
      const SPACE_ITEM_SIZE = (hp(68) - ITEM_SIZE) / 2;
      const PROFILE_ITEM_SIZE = (hp(92) - ITEM_SIZE) / 2;
      const CONTACTS_ITEM_SIZE = (hp(65) - ITEM_SIZE) / 2;

      
      const renderItem = ({ item, index }) => {
        const inputRange2 = [
         
          (index - 4) * ITEM_SIZE,
          (index - 3) * ITEM_SIZE,
          (index - 2) * ITEM_SIZE,
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
          (index + 1) * ITEM_SIZE,
          (index + 2) * ITEM_SIZE,
          (index + 3) * ITEM_SIZE,
          (index + 4) * ITEM_SIZE,
        ]
        const inputRange = [
          (index - 4) * ITEM_SIZE,
          (index - 3) * ITEM_SIZE,
          (index - 2) * ITEM_SIZE,
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
          (index + 1) * ITEM_SIZE,
          (index + 2) * ITEM_SIZE,
          (index + 3) * ITEM_SIZE,
          (index + 4) * ITEM_SIZE,
        ]
        const translateX = scrollY.interpolate({
          inputRange,
          outputRange: [-120,-100, 0, 80, 120, 60,0, -60, -80]
        })
        const translateY = scrollY.interpolate({
          inputRange: inputRange2,
          outputRange: [-400, -240, -50, 0, 20, 40, 80, 170, 400]
        })
        // const scale = scrollY.interpolate({
        //   inputRange,
        //   outputRange: [0.6, 0.8, 1, 1.3, 1, 0.8, 0.6]
        // })
        if (!item.value) {
          return (
            <View style={{ height: SPACE_ITEM_SIZE }} />
          )
        } else {
          return (
            <Animated.View
              key='image0'
              style={[styles.image, {
                width: wp("30%"),
                height: ITEM_SIZE,
                transform: [{ translateX },  { translateY }],//{ scale },
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: wp("17%"),
                backgroundColor: `#${item.value}`,
              }]}>
            <Pressable
              onPress={() => props.navigation.navigate('SendInvite')}
              style={[styles.circle, {
                width: wp("30%"),
                height: ITEM_SIZE,
                borderWidth: 0,
                borderRadius: wp("17%"),
                backgroundColor: `#${item.value}`,
                width: wp("29.8%"), height: wp("29%"),
                justifyContent: 'center', alignItems: 'center',
              }]}>
              <Text style={[styles.text]}>{item.name}</Text>
              <View 
                style={{ 
                  flexDirection: 'row', alignItems: 'center', 
                  marginTop: wp(2), 
                }}>
                  <Text style={[styles.text]}>{index}</Text>
                  {/* <Feather style={{ marginLeft: wp(1) }} 
                    name="user-plus" size={18} color="#fff" /> */}
               </View>
             </Pressable>
          </Animated.View>
        )}};

            const scrollY = useRef(new Animated.Value(0)).current;
            const animatedValue = useRef(new Animated.Value(0)).current;
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'red', justifyContent :'center', 
            alignItems: 'center'
        }}>
        <Animated.FlatList
            // horizontal
            showsVerticalScrollIndicator={false}  
            data={data}
            keyExtractor={(_, index)=> `${index}`}
            renderItem={renderItem}
            contentContainerStyle={{ alignItems: 'center' }}
            snapToInterval={ITEM_SIZE}
            decelerationRate={0.4}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true } 
            )}
            scrollEventThrottle={16}
            style={{width: '100%'}}
            />
        </View>
    )
}

export default CircularList

const styles = StyleSheet.create({})