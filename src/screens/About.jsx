import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About() {
  const handleNameClick = () => {
    Alert.alert('Congrat', 'You do the THING!');
  };

  return (
    <MainLayout>
      <View>
        <Text>Duc's Awesome To-Do List App</Text>
        <TouchableOpacity onPress={handleNameClick}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Created by: Duc Nguyen</Text>
        </TouchableOpacity>
        <Text>Version 1.0.0</Text>
      </View>
    </MainLayout>
  );
}

export default About;
