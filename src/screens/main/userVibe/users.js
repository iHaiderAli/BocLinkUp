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

const UsersList = () => {
  return (
    <View>
      <FlatList
        data={[
          { _id: 1, name: "Ali" },
          { _id: 2, name: "Ali" },
          { _id: 3, name: "Ali" },
          { _id: 4, name: "Ali" },
          { _id: 5, name: "Ali" },
          { _id: 6, name: "Ali" },
          { _id: 7, name: "Ali" },
          { _id: 8, name: "Ali" },
          { _id: 9, name: "Ali" },
          { _id: 10, name: "Ali" },
          { _id: 11, name: "Ali" },
          { _id: 12, name: "Ali" },
        ]}
        // key={"data_list"}
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
