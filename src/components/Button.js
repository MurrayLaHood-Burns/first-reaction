// @flow
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}  
      style={styles.button}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5
  }
});

export default Button;
