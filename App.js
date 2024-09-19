import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [task,setTask] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.addTask}>Add Task</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter a task'
          value={task}
          onChange={setTask}
        />
        <TouchableOpacity style={styles.addTaskButton}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#583bff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
    padding: 20,
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  addTask: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  inputStyle: {
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "gray",
    borderRadius: 50,
    fontSize: 15
  },
  addTaskButton: {
    width: 100,
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    alignSelf: "flex-end"
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
