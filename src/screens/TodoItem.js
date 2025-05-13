import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  todoitemtext: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginRight: 12,
    fontFamily: 'SequelSans-Medium',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontFamily: 'SequelSans-Light',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#000',
  },
  completeButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SequelSans-Medium',
  },
  deleteButtonText: {
    color: '#fff',
  },
  completeButtonText: {
    color: '#000',
  },
});

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <View style={styles.todoitem}>
      <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={() => toggleCompleted(task.id)}>
          <Text style={[styles.buttonText, styles.completeButtonText]}>
            {task.completed ? 'Undo' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => deleteTask(task.id)}>
          <Text style={[styles.buttonText, styles.deleteButtonText]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;