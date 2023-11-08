import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function Home({ navigation }) {
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
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks}/>
                <ToDoForm onAdd={handleAdd}/>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default Home;