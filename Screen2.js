import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./actions";
import store from "./store";

const Screen2 = ({navigation}) => {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const item = { name: newItem };
    fetch("https://655d45319f1e1093c599283e.mockapi.io/shop", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(data => {
     dispatch(addItem(data));
     console.log(store.getState())
      setNewItem("");
      navigation.goBack(); // Quay về Screen1 sau khi thêm thành công
    });
  }

  
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>ADD JOB</Text>
      <TextInput
        placeholder="  Enter new Job"
        value={newItem}
        onChangeText={setNewItem}
        style={{
          borderWidth: 1,
          margin: 5,
          width: "80%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable>
          <Text
            style={{
              backgroundColor: "green",
              textAlign: "center",
              borderRadius: 10,
              height: 40,
              width: 60,
            }}
            onPress={handleAddItem}
          >
            Finish
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
