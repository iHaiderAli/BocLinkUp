import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgContainer from '../../../components/app/svgContainer'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import { Colors } from '../../../styles'

const BarItemInfo = ({ title, icon, _top, _left, textValue }) => {
  return (
    <>
        <View style={{flexDirection: 'row', 
            position: 'absolute', zIndex: 5, 
            // backgroundColor: 'pink', 
            // marginTop: 50
            justifyContent: 'center',
            alignItems: 'center',
            left: _left,
            top: _top
        }}>
                    <SvgContainer
                        svg={icon}
                        size={10}
                        />
                    <Text style={{color: Colors.TEXT_COLOR_5, fontSize: 10, left: 5}} >{title}</Text>
                    <View style={{alignItems: 'flex-end'}}>

                    <SvgContainer
                        svg={SVG_STRINGS.outerinput5()}
                        width={150}
                        height={22}
                        _style={{flex: 1, left: 10}}
                        />
                        <View style={{position: 'absolute', zIndex: 1, 
                            width: 100, height: 22,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{color: Colors.WHITE, fontSize: 8}}>{textValue}</Text>

                    </View>
                    </View>
        </View>
           
    </>
  )
}

export default BarItemInfo

const styles = StyleSheet.create({})