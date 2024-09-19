import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [task,setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  function add() {
    setTasks([task, ...tasks]);
    setTask("");
  }
  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.addTask}>Add Task</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter a task'
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addTaskButton} onPress={() => add()}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
        <ScrollView style={styles.tasksContainer}>
          {tasks.map((item, index) => (
            <View key={index} style={styles.singleTaskContainer}>
              <Text style={styles.task}>{item}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={(index) => deleteTask(index)}>
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
    paddingBottom: 0,
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
  },
  tasksContainer: {
    marginTop: 50,
    width: "100%",
    height: '80%',
    padding: 20,
  },
  singleTaskContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    minHeight: 50,
    marginBottom: 20,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  task: {    
    paddingRight: 15,
    color: '#000',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap'
  },
  deleteButton: {
    backgroundColor: 'black',
    height: '100%',
    width: 50,
    marginRight: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});
