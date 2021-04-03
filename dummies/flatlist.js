import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Haseeb", id: 1 },
    { name: "Wajahat", id: 2 },
    { name: "Rashid", id: 3 },
    { name: "Hayyam", id: 4 },
    { name: "Hammid", id: 5 },
    { name: "Abid", id: 6 },
    { name: "Jawad", id: 7 },
  ]);

  // if we donot have a key property in our data as data comming from API
  // then keyExtractor Prop will be used
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
