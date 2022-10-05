import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

const MyImageButton = (props) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.btnColor }]}
      onPress={props.customClick}>

      <Icon style={styles.icon}
        name={props.btnIcon} size={30} color='white' />

      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: '#ffffff',
    padding: 15,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: '50%',
  },
  text: {
    color: '#ffffff',
  
  },
  icon: {
    fontSize: '25px',
    paddingBottom: 5,
  }
});

export default MyImageButton;