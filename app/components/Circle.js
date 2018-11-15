import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const Circle = ({ color, style }) => (
  <View style={[styles.circle, { backgroundColor: color.value }, style]} />
);

Circle.defaultProps = {
  style: undefined
};

Circle.propTypes = {
  color: PropTypes.shape({
    value: PropTypes.string.isRequired
  }).isRequired,
  style: ViewPropTypes.style
};

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden'
  }
});

export default Circle;
