import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MyKeyboardAvoidView = ({
  children,
  extraHeight,
  widthScroll,
  iosExtraHeight,
}) => {
  return (
    <>
      {widthScroll && (
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          extraScrollHeight={Platform.OS == "ios" ? -20 : 20}
        >
          {children}
        </KeyboardAwareScrollView>
      )}
      {!widthScroll && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          enabled={true}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              {children}
              <View style={{ height: extraHeight ?? 0 }} />
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

export default MyKeyboardAvoidView;

const styles = StyleSheet.create({});
