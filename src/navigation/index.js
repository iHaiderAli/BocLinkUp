import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./Routes";
import { Colors } from "../styles";

import SplashScreen from "../screens/auth/splashScreen";
import SignUpSceneOne from "../screens/auth/signUp";
import SelectionFields from "../screens/auth/signUp/selectionFields";
import EntryPointScene from "../screens/auth/signUp/entryPointScene";
import ChangeNumber from "../screens/main/changeNumber";
import TwoWaySecurity from "../screens/main/twoWaySecurity";
import AccountReport from "../screens/main/accountReport";
import ContactProfileScreen from "../screens/main/contactProfile";
import ReportProblem from "../screens/main/reportProblem";
import SecurityCode from "../screens/main/securityCode";
import SecurityScreen from "../screens/main/securityScreen";
import ProfileSetting from "../screens/main/profileSetting";
import AccountDelete from "../screens/main/accountDelete";
import ProfileTabs from "../screens/main/profileTabs";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.BLACK_COLOR,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.BLACK_COLOR}
      />
      <NavigationContainer
        theme={{
          colors: {
            background: Colors.BLACK_COLOR,
          },
        }}
      >
        <Stack.Navigator
          initialRouteName={Routes.SPLASH_SCREEN}
          screenOptions={{ gestureEnabled: false }}
        >
          <Stack.Screen
            name={Routes.SPLASH_SCREEN}
            component={SplashScreen}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.SIGNUP_SCENE_1}
            component={SignUpSceneOne}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.SELECTION_FIELD_SIGNUP}
            component={SelectionFields}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.ENTRY_POINT}
            component={EntryPointScene}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.CHANGE_NUMBER_SCENE}
            component={ChangeNumber}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.TWO_WAY_SECURITY_SCREEN}
            component={TwoWaySecurity}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.ACCOUNT_REPORT}
            component={AccountReport}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.CONTACT_PROFILE_TAB}
            component={ContactProfileScreen}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.REPORT_PROBLEM}
            component={ReportProblem}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.SECURITY_CODE}
            component={SecurityCode}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.SECURITY_SCREEN}
            component={SecurityScreen}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.PROFILE_SETTING}
            component={ProfileSetting}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.DELETE_ACCOUNT}
            component={AccountDelete}
            options={({ route }) => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name={Routes.USER_PROFILE_TAB}
            component={ProfileTabs}
            options={({ route }) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
