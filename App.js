import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Cofee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "play on the switch", key: "3" },
    { text: "Godzilla is here", key: "4 " },
    { text: "Some pain never fades away", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("OOPS!", "Todos must me over 3 chars long", [
        {
          text: "understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        {/* content */}
        <View style={styles.content}>
          {/* to do form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem pressHandler={pressHandler} item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
