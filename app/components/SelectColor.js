import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, Link, Text, Circle } from 'components';
import PropTypes from 'prop-types';

const SelectColor = ({ setFieldValue, color }) => (
  <Item>
    <Link to="ColorPicker" params={{ setFieldValue, name: 'color' }}>
      <View style={styles.selectColorContainer}>
        <Circle style={styles.circle} color={{ value: color }} />
        <Text>Select Color </Text>
      </View>
    </Link>
  </Item>
);

SelectColor.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  selectColorContainer: { flexDirection: 'row', paddingVertical: 5 },
  circle: { margin: 2 }
});

export default SelectColor;
