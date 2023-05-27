import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { _styles } from './styles'
import { Colors, Layout, Typography } from '../../../styles'
import LinearGradient from 'react-native-linear-gradient';
import SvgContainer from '../../../components/app/svgContainer';
import { SVG_STRINGS } from '../../../../assets/svgStrings';
import LabelItem from '../../../components/app/labelItem';
import AbstractButton from '../../../components/app/abstractButton';

const WrapPasswordTypes = ({ backCall, navigation , children, _wrapStyle, hideBackButton, 
    height, 
    marginTop
}) => {
  return (
      <>
        <View style={{
            ..._styles.passwordBackLayer, 
            ...styles.layer, 
        }}/>
      
            <View style={{ 
                flex: 1, 
                // justifyContent : 'flex-end', 
                alignItems :'center',
                position:'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: 3,
                // backgroundColor: 'pink'
            }}>
                {
                    !hideBackButton &&
                    <View style={{height:  height ?? 120}}>
                        <AbstractButton
                            label={'BACK'}
                            labelStyle={{ 
                                fontFamily: Typography.ROBODRON, 
                                fontSize: 13,
                                color: Colors.WHITE,
                                padding: 0,
                                margin: 0
                            }}
                            // onPressIcon={}
                            height={40}
                            _style={{ justifyContent: 'center', marginTop: marginTop ?? 80 }}
                            rightSvg={SVG_STRINGS.backIcon()}
                            rightSvgSize={18}
                            onPressButton={backCall}
                        />
                    </View>
                }
                 <View style={{..._wrapStyle, flex: 4,}}>
                    {children}
                </View>
            </View>
      </>
  )
}

export default WrapPasswordTypes

const styles = StyleSheet.create({
    layer: {
        position: 'absolute',
        width: Layout.WINDOW_WIDTH,
        height: Layout.WINDOW_HEIGHT,
        zIndex: 1,
        opacity: 0.7,
    }
})