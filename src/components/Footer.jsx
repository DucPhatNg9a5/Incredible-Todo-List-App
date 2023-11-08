import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the footer.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#333',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    text: {
      color: '#fff',
    },
  });

export default Footer;
