/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study'
  ]);

  const handleAdd = (newTask) => {
    if (tasks.find((task) => task === newTask)) {
      alert('Task already exists');      
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm onAdd={handleAdd}/>
    </SafeAreaView>
  );
}

export default App;