import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import store from './store';
import { updateItem } from './actions';
import { useDispatch } from 'react-redux';

const Screen3 = ({route,navigation}) => {
    
    const {item} = route.params;
    console.log(item)
    const [newItem, setNewItem] = useState("");
    const dispatch = useDispatch();
    const handleUpdateItem = () => {
        const updatedItem = {...item, congviec: newItem };
        // console.log(u)
        fetch(`https://655d45319f1e1093c599283e.mockapi.io/shop/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),
        })
          .then((response) => response.json())
          .then((data) => {
            dispatch(updateItem(data));
            setNewItem("");
            navigation.goBack(); //
            console.log(store.getState())
        });
      };
  return (
    <View>
       <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>UPDATE JOB</Text>
      <TextInput
        placeholder="  Enter update Job"
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
            onPress={handleUpdateItem}
          >
            Finish
          </Text>
        </Pressable>
      </View>
    </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})