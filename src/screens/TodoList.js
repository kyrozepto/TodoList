import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#000',
    marginBottom: 8,
    fontFamily: 'SequelSans-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'SequelSans-Light',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding: 10,
    fontFamily: 'SequelSans-Medium',
  },
  addButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SequelSans-Medium',
  },
  taskList: {
    flex: 1,
  }
});

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Google Event Volunteering", completed: true },
    { id: 2, text: "Assignments", completed: false },
  ]);   
  const [text, setText] = useState('');

  function addTask() {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText('');
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a new task"
          placeholderTextColor="#999"
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskList}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TodoList;