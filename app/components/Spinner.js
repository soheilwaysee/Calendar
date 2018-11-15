import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from 'utils/theme';

const Spinner = ({ color, size, animating, hidesWhenStopped }) => (
  <ActivityIndicator
    color={color}
    size={size}
    animating={animating}
    hidesWhenStopped={hidesWhenStopped}
  />
);

Spinner.defaultProps = {
  color: colors.primary,
  animating: true,
  hidesWhenStopped: true,
  size: 'small'
};

Spinner.propTypes = {
  color: PropTypes.string,
  animating: PropTypes.bool,
  hidesWhenStopped: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([1, 0]),
    PropTypes.oneOf(['small', 'large'])
  ])
};

export default Spinner;
