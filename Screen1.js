import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteItem, updateItem } from "./actions";
import store from "./store";

const Screen1 = ({ navigation }) => {
  const [data, setData] = useState([]);
  const handleDeleteItem = (id) => {
    fetch(`https://655d45319f1e1093c599283e.mockapi.io/shop/${id}`, {
      method: "DELETE",
    }).then(() => {
      store.dispatch(deleteItem(id));
      console.log(store.getState());
    });
  };

  // Cập nhật item trong API
  
  // const items = useSelector(state => state);
  // console.log(items)
  const fetchData = () => {
    const url = "https://655d45319f1e1093c599283e.mockapi.io/shop";
    fetch(url)
      .then((rs) => rs.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {data.map((item) => {
        return (
          <View key={item.id}>
            <View
              style={{
                width: "80%",
                height: 50,
                backgroundColor: "#9095A0",
                marginVertical: 20,
                marginHorizontal: 40,
              }}
            >
              <Text>{item.name}</Text>
              {/* <Text>{item.address}</Text> */}
              <Text>{item.congviec}</Text>

              <View style={{ position: "absolute", right: 60 }}>
                <Pressable>
                  <Text
                    style={{
                      backgroundColor: "pink",
                      textAlign: "center",
                      borderRadius: 10,
                      height: 30,
                      width: 50,
                    }}
                    onPress={() => {
                      handleDeleteItem(item.id);
                      fetchData();
                    }}
                  >
                    Delete
                  </Text>
                </Pressable>
              </View>
              <View style={{ position: "absolute", right: 0 }}>
                <Pressable onPress={()=>{navigation.navigate('Screen3',{item:item})}}>
                  <Text
                    style={{
                      backgroundColor: "pink",
                      textAlign: "center",
                      borderRadius: 10,
                      height: 30,
                      width: 50,
                    }}
                  >
                    Update
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        );
      })}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          onPress={() => navigation.navigate("Screen2")}
          style={{
            width: 70,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
