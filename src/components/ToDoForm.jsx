import React from 'react';
import {StyleSheet, View, TextInput, Button, Alert} from 'react-native';
import tasksData from '../data/tasks.json';

function ToDoForm({ onAdd }) {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] =  React.useState([]);

  React.useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);
 

  const handleAdd = () => {
    onAdd(taskText);
    setTaskText('');
  };

  const handleAddRandomTask = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    onAdd(randomTask);
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
        />
        <Button title="Add" onPress={handleAdd}/>
        <Button title="Generate Random Task" onPress={handleAddRandomTask}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;