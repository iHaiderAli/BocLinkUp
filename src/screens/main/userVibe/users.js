import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import { Colors } from "../../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const UsersList = ({ usersList, onContactClicked }) => {
  return (
    <View>
      <FlatList
        data={usersList}
        keyExtractor={(item, index) => `user_list_${index}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              onContactClicked(item)
            }}
            key={`item_${index}`}
            style={{
              flex: 1,
              height: 100,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              key={index}
              source={require("../../../../assets/images/bocUser.png")}
              style={{
                ...styles.image,
                // transform: [{ scale: scale }],
              }}
              resizeMode={"stretch"}
            />
            <Text style={{
              fontSize: 14,
              color: Colors.WHITE,
            }}>{usersList[index].firstName}</Text>

          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    // borderColor: 'red'
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
