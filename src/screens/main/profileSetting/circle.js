import {View, Text as RnText, Image, Dimensions, StyleSheet} from "react-native";
import React, { Component } from "react";
import Svg, { Circle, Text, TextPath, TSpan, G, Path } from "react-native-svg";
import { Colors } from "../../../styles";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import TestList from "../contactProfile/testList";
import BarItemInfo from "./barItemInfo";

const width = 100;
const height = 100;
const size = width < height ? width - 32 : height - 16;
const strokeWidth = 25;
const radius = (size - strokeWidth) / 2;
const circunference = radius * 2 * Math.PI;
const half = Dimensions.get("screen").width / 2;
const HEIHGT_HALF = Dimensions.get("screen").height / 2;


const CricleView = () => {
  return (
      <>
      
    <View style={{flex: 1, justifyContent: 'center'}}>
        <Svg height="100%" width="100%" viewBox="0 0 300 300">
            <G id="circle">
                <Circle
                    r={82}
                    x={100+half}
                    y={150}
                    fill="none"
                    stroke={Colors.WHITE}
                    strokeWidth={1}
                />
            </G>
            <G id="circle2">
                <Circle
                    r={80}
                    x={100+half}
                    y={150}
                    fill="none"
                    stroke={Colors.WHITE}
                    strokeWidth={1}
                />
            </G>
    
            <G id="webCompatible">
                <Path
                    d="M 110,0 A 110,110 0 0 1 -110,0 A 110,110 0 0 1 110,0"
                    transform="translate(150,150)"
                    stroke={Colors.TEXT_COLOR_5}
                    fill="none"
                    x={half - 55}
                />
            </G>
            <G id="webCompatible2">
                <Path
                    d="M 81,0 A 81,81 0 0 1 -81,0 A 81,81 0 0 1 81,0"
                    transform="translate(150,150)"
                    // stroke={Colors.TEXT_COLOR_5}
                    fill="none"
                    x={half - 50}
                />
            </G>
            <G id="circle3">
                <Path
                    d="M 140,0 A 140,140 0 0 1 -140,0 A 140,140 0 0 1 140,0"
                    transform="translate(150,150)"
                    stroke={'#D3AA42'}
                    fill="none"
                    x={half - 60}
                    strokeWidth={5}
                    opacity={0.2}
                />
            </G>
            <G id="circle4">
                <Path
                    d="M 146,0 A 146,146 0 0 1 -146,0 A 146,146 0 0 1 146,0"
                    transform="translate(150,150)"
                    stroke={'#D3AA42'}
                    fill="none"
                    x={half - 62}
                    strokeWidth={2}
                    opacity={0.2}
                />
            </G>
            <G id="circle5">
                <Circle
                    r={50}
                    x={103+half}
                    y={150}
                    fill="none"
                    stroke={Colors.TEXT_COLOR_5}
                    strokeWidth={5}
                    strokeDasharray={[1, 5]}
                    opacity={0.5}
                />
            </G>
            <G id="circle6">
                <Circle
                    r={58}
                    x={100+half}
                    y={150}
                    fill="none"
                    stroke={Colors.TEXT_COLOR_5}
                    strokeWidth={5}
                    strokeDasharray={[1, 5]}
                    opacity={0.5}
                />
            </G>
            <G id="circle7">
                <Circle
                    r={60}
                    x={100+half}
                    y={150}
                    fill="none"
                    stroke={Colors.TEXT_COLOR_5}
                    strokeWidth={1}
                    strokeDasharray={[5, 5]}
                    opacity={0.5}
                    rotation={6}
                />
            </G>
            
            <Text fill={Colors.YELLOW} fontSize="10" strokeWidth={1} 
                rotate={5}
                dx={400}
                dy={half}
            >
                <TextPath href="#webCompatible" >
                    <TSpan dy={-14} letterSpacing={10}>
                        SAM
                    </TSpan>
                </TextPath>
            </Text>
           
        
            </Svg>
            <View style={{position: 'absolute', zIndex: 2, alignSelf: 'center'}}>
                <Image
                    source={require("../../../../assets/images/bocUser.png")}
                    style={{width: 120, height: 120, left: half, 
                        borderWidth: 1,
                        borderColor: Colors.BORDER_COLOR,
                        borderRadius: 60
                    }}
                />
               
            </View>
            <View style={{position: 'absolute', zIndex: 3, alignSelf: 'center'}}>
                <View style={{borderWidth: 5, 
                        height: 260, width: 260, 
                        borderRadius: 140,
                        left: half -5, 
                        justifyContent: 'center'
                    }}>
                        <TestList 
                            circleSize={250} itemSize={35}
                        />
    
                    </View>
            </View>
                <BarItemInfo title={'NAME'} icon={SVG_STRINGS.userIcon()} _top={ HEIHGT_HALF - 40} _left={10} textValue={'Samul.J'}/>
                <BarItemInfo title={'ABOUT'} icon={SVG_STRINGS.infoIcon()} _top={ HEIHGT_HALF} _left={30}/>
                <BarItemInfo title={'PHONE'} icon={SVG_STRINGS.phoneIcon2()} _top={HEIHGT_HALF + 40} _left={50} textValue={'9897095387'} />
    </View>
    </>
  )
}

export default CricleView

const styles = StyleSheet.create({})
// import {View, Image, Dimensions} from "react-native";
// import React, { Component } from "react";
// import Svg, { Circle, Text, TextPath, TSpan, G, Path } from "react-native-svg";
// import { Colors } from "../../../styles";
// import SvgContainer from "../../../components/app/svgContainer";
// import { SVG_STRINGS } from "../../../../assets/svgStrings";
// import TestList from "../contactProfile/testList";

// const width = 100;
// const height = 100;
// const size = width < height ? width - 32 : height - 16;
// const strokeWidth = 25;
// const radius = (size - strokeWidth) / 2;
// const circunference = radius * 2 * Math.PI;
// const half = Dimensions.get("screen").width / 2;
// const CircleView = () => {

//     return (
//         <>
     

//         <Svg height="100%" width="100%" viewBox="0 0 300 300">
//             {/* white circles  */}
//         <G id="circle">
//         <Circle
//             r={82}
//             x={100+half}
//             y={150}
//             fill="none"
//             stroke={Colors.WHITE}
//             strokeWidth={1}
//         />
//         </G>
//         <G id="circle2">
//             <Circle
//                 r={80}
//                 x={100+half}
//                 y={150}
//                 fill="none"
//                 stroke={Colors.WHITE}
//                 strokeWidth={1}
//             />
//         </G>

//         <G id="webCompatible">
//             <Path
//                 d="M 110,0 A 110,110 0 0 1 -110,0 A 110,110 0 0 1 110,0"
//                 transform="translate(150,150)"
//                 stroke={Colors.TEXT_COLOR_5}
//                 fill="none"
//                 x={half - 55}
//             />
//         </G>
//         <G id="webCompatible2">
//             <Path
//                 d="M 81,0 A 81,81 0 0 1 -81,0 A 81,81 0 0 1 81,0"
//                 transform="translate(150,150)"
//                 // stroke={Colors.TEXT_COLOR_5}
//                 fill="none"
//                 x={half - 50}
//             />
//         </G>
//         <G id="circle3">
//             <Path
//                 d="M 140,0 A 140,140 0 0 1 -140,0 A 140,140 0 0 1 140,0"
//                 transform="translate(150,150)"
//                 stroke={'#D3AA42'}
//                 fill="none"
//                 x={half - 60}
//                 strokeWidth={5}
//                 opacity={0.2}
//             />
//         </G>
//         <G id="circle4">
//             <Path
//                 d="M 146,0 A 146,146 0 0 1 -146,0 A 146,146 0 0 1 146,0"
//                 transform="translate(150,150)"
//                 stroke={'#D3AA42'}
//                 fill="none"
//                 x={half - 62}
//                 strokeWidth={2}
//                 opacity={0.2}
//             />
//         </G>
//         <G id="circle5">
//             <Circle
//                 r={50}
//                 x={103+half}
//                 y={150}
//                 fill="none"
//                 stroke={Colors.TEXT_COLOR_5}
//                 strokeWidth={5}
//                 strokeDasharray={[1, 5]}
//                 opacity={0.5}
//             />
//         </G>
//         <G id="circle6">
//             <Circle
//                 r={58}
//                 x={100+half}
//                 y={150}
//                 fill="none"
//                 stroke={Colors.TEXT_COLOR_5}
//                 strokeWidth={5}
//                 strokeDasharray={[1, 5]}
//                 opacity={0.5}
//             />
//         </G>
//         <G id="circle7">
//             <Circle
//                 r={60}
//                 x={100+half}
//                 y={150}
//                 fill="none"
//                 stroke={Colors.TEXT_COLOR_5}
//                 strokeWidth={1}
//                 strokeDasharray={[5, 5]}
//                 opacity={0.5}
//                 rotation={6}
//             />
//         </G>
//         {/* <View style={{left: half}}>
//             <SvgContainer
//                 svg={SVG_STRINGS.backImage2()}
//                 size={300}
//                 _style={{left: half}}
//             />
//         </View> */}
//         <Text fill="#000" fontSize="14">
//         <TextPath href="#circle" fill={Colors.TEXT_COLOR_5}>
//             <TSpan dy={-14}>
//             SAM
//             </TSpan>
//         </TextPath>
//         </Text>
//         <Text fill={Colors.YELLOW} fontSize="10" strokeWidth={1} 
//             rotate={5}
//             dx={220}
//             dy={half}
//         >
//             <TextPath href="#webCompatible" >
//                 <TSpan dy={-14} letterSpacing={10}>
//                     SAM2
//                 </TSpan>
//             </TextPath>
//         </Text>
//         {/* <Text fill={Colors.YELLOW} fontSize="10" strokeWidth={1} 
//             rotate={5}
//             dx={220}
//             dy={half}
//         >
//             <TextPath href="#webCompatible2">
//                 <Path
//                 d="M 20,0 A 20,20 0 0 1 -20,0 A 20,20 0 0 1 20,0"
//                     transform="translate(150,150)"
//                     stroke={Colors.TEXT_COLOR_5}
//                     fill="none"
//                     // x={half - 50}
//                 />
//             </TextPath>
//         </Text> */}
    
//         </Svg>
//         <View style={{position: 'absolute', zIndex: 2, alignSelf: 'center'}}>
//             <Image
//                 source={require("../../../../assets/images/bocUser.png")}
//                 style={{width: 120, height: 120, left: half, 
//                     borderWidth: 1,
//                     borderColor: Colors.BORDER_COLOR,
//                     borderRadius: 60
//                 }}
//             />
           
//         </View>
//         <View style={{position: 'absolute', zIndex: 3, alignSelf: 'center'}}>
//             <View style={{borderWidth: 5, 
//                     // top: 10,
//                     // borderColor: 'green', 
//                     height: 260, width: 260, 
//                     borderRadius: 140,
//                     left: half -5, 
//                     justifyContent: 'center'
//                 }}>
//                     <TestList 
//                         circleSize={250} itemSize={35}
//                     />

//                 </View>
//         </View>
//         {/* </View> */}
//     </>

//     )
// }

// export default CircleView;

