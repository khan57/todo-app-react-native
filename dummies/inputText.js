import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Haseeb");
  const [age, setAge] = useState(25);

  // const clickHandler = () => {
  //   setName("Haseeb ur rehman");
  //   setPerson({
  //     name: "Some updated Name",
  //     age: 33,
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g Haseeb'
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='e.g 20'
        style={styles.input}
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        name {name} , age: {age}{" "}
      </Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
});
