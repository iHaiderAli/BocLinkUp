import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import {
  Svg,
  Circle,
  G,
  Line,
  Path,
  Text as SvgText,
  TextPath,
  TSpan,
} from "react-native-svg";
import { Colors } from "../../../styles";
import SvgContainer from "../../../components/app/svgContainer";
import { SVG_STRINGS } from "../../../../assets/svgStrings";
import CustomStatusBar from "./customStatusBar";

const size = 100;
const strokeWidth = 40;
const center = size / 2;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const size2 = 90;
const strokeWidth2 = 40;
const center2 = size2 / 2;
const radius2 = size2 / 2 - strokeWidth / 2;
const circumference2 = 2 * Math.PI * radius;

const IMAGE_CONTAINER_WIDHT = 80;
const half = Dimensions.get("screen").width / 2;

const TopView = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.imageOuter,
          position: "absolute",
          left: 0,
          zIndex: 1,
        }}
      >
        <Image
          source={require("../../../../assets/images/bocUser.png")}
          style={styles.image}
        />
        <Svg
          height={size}
          width={size}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <G id="circle">
            <Circle
              stroke={Colors.YELLOW}
              cx={center}
              cy={center}
              r={radius}
              strokeDasharray={[5, 2]}
              strokeWidth={2}
            //   strokeDasharray={circumference}
            />
          </G>
          <G id="circle2">
            <Circle
              stroke={Colors.YELLOW}
              cx={center}
              cy={center}
              r={radius2}
              strokeDasharray={[5, 2]}
              strokeWidth={2}
            //   strokeDasharray={circumference}
            />
          </G>
          <G id="circle2">
            <Circle
              stroke={Colors.YELLOW}
              cx={center}
              cy={center}
              r={radius2 + 3}
              strokeDasharray={[2, 10]}
              strokeWidth={size - size2 - 4}
            //   strokeDasharray={circumference}
            />
          </G>
          {/* <G id="circle2">
            <Circle
              stroke={"red"}
              cx={center}
              cy={center}
              r={radius2 + 3}
              strokeDasharray={[10, 20]}
              strokeWidth={10}
              rx={20}
              ry={20}
              //   strokeDasharray={circumference}
            />
          </G> */}
        </Svg>
      </View>
      <View
        style={{
          width: Dimensions.get("screen").width,
        }}
      >
        <View
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              height: 120,
            }}
          >
            <CustomStatusBar />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                top: 30,
                paddingLeft: 30,
              }}
            >
              {/* <View style={{ width: 40 }} /> */}
              <View
                style={{
                  ...styles.stylestatusBarIcon,
                  justifyContent: "flex-end",
                  transform: [{ rotate: "-15deg" }],
                  top: 5,
                }}
              >
                <Text
                  style={{
                    ...styles.tabText,
                  }}
                >
                  CHATS
                </Text>
              </View>
              <View
                style={{
                  ...styles.stylestatusBarIcon,
                  transform: [{ rotate: "-10deg" }],
                  top: 10,
                }}
              >
                <Text
                  style={{
                    ...styles.tabText,
                  }}
                >
                  CONTACTS
                </Text>
              </View>
              <View style={styles.stylestatusBarIcon}>
                <Text style={{ ...styles.tabText, top: 3 }}>VIBE</Text>
              </View>
              <View
                style={{
                  ...styles.stylestatusBarIcon,
                  transform: [{ rotate: "10deg" }],
                  top: 10,
                }}
              >
                <Text style={styles.tabText}>CALLS</Text>
              </View>
              <View
                style={{
                  ...styles.stylestatusBarIcon,
                  justifyContent: "flex-end",
                  transform: [{ rotate: "12deg" }],
                  top: 5,
                  // backgroundColor: "pink",
                }}
              >
                <SvgContainer svg={SVG_STRINGS.searchIcon()} size={17} />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 60,
                paddingLeft: 30,
                right: 0,
                top: -5,
              }}
            >
              <Svg>
                <Path
                  d="M 0 60 Q 175 0 350 60"
                  stroke="red"
                  fill="transparent"
                  strokeDasharray={[5, 2]}
                />
              </Svg>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                top: -20,
                paddingLeft: 30,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  width: 80,
                  height: 30,
                  alignItems: "center",
                  top: 10,
                }}
              >
                <SvgContainer svg={SVG_STRINGS.videoIcon()} size={17} />
              </View>
              <View
                style={{
                  ...styles.stylestatusBarIcon,
                  // alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.tabText,
                    height: 20,
                    top: -10,
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  Martha
                </Text>
                {/* line 2 */}
                <View
                  style={{
                    width: 100,
                    alignItems: "center",
                    paddingHorizontal: 10,
                    height: 20,
                  }}
                >
                  <Svg>
                    <Path
                      d="M 0 20 Q 40 0 80 20"
                      stroke="red"
                      fill="transparent"
                      strokeDasharray={[5, 2]}
                    />
                  </Svg>
                </View>
                <Text
                  style={{
                    ...styles.tabText,
                    top: -5,
                  }}
                >
                  Online
                </Text>
              </View>
              <View
                style={{
                  // ...styles.stylestatusBarIcon,
                  justifyContent: "flex-end",
                  width: 40,
                  height: 30,
                  transform: [{ rotate: "15deg" }],
                }}
              >
                <SvgContainer svg={SVG_STRINGS.phoneIcon()} size={17} />
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  width: 40,
                  height: 30,
                  // backgroundColor: "red",
                  top: 10,
                }}
              >
                <SvgContainer svg={SVG_STRINGS.menuIcon()} size={17} />
              </View>
            </View>
            {/* line 3 */}
            <View
              style={{
                width: "100%",
                paddingLeft: 35,
                top: -55,
              }}
            >
              <Svg>
                <Path
                  d="M 0 60 Q 175 0 350 60"
                  stroke="red"
                  fill="transparent"
                  strokeDasharray={[2, 2]}
                />
              </Svg>
            </View>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              right: 10,
              top: 20,
            }}
          >
            <Image
              source={require("../../../../assets/images/bocUser.png")}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopView;

const styles = StyleSheet.create({
  image: {
    height: 37,
    width: 37,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
  imageOuter: {
    height: 80,
    width: 80,
    left: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 160,
    flexDirection: "row",
  },
  stylestatusBarIcon: {
    flex: 1,

    alignItems: "center",
    height: 40,
  },
  tabText: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  parent: {
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 2 }],

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
