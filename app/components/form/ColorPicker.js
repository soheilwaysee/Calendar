import React from 'react';
import { Text, Button, Circle } from 'components';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { circleColors } from 'utils/constants';

const ColorPicker = ({ navigation }) => {
  const setFieldValue = navigation.getParam('setFieldValue');
  const name = navigation.getParam('name');
  const changeColorHandler = value => () => {
    setFieldValue(name, value);
    navigation.goBack();
  };

  return (
    <View>
      {circleColors.map(color => (
        <Button
          transparent
          key={color.name}
          full
          onPress={changeColorHandler(color.value)}
          style={styles.button}
        >
          <Circle color={color} />
          <Text style={styles.colorName}>{color.name}</Text>
        </Button>
      ))}
    </View>
  );
};

ColorPicker.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};
const styles = StyleSheet.create({
  button: { width: '90%', alignSelf: 'center' },
  colorName: { flex: 1 }
});

export default ColorPicker;
