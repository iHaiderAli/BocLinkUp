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

const UsersList = ({ usersList }) => {
  return (
    <View>
      <FlatList
        data={usersList}
        keyExtractor={(item, index) => `user_list_${index}`}
        renderItem={({ item, index }) => (
          <View
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

          </View>
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
