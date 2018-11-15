import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { colors } from 'utils/theme';

const Link = ({ children, navigation, to, params, ...rest }) => {
  const onPressHandler = () => navigation.navigate(to, params);

  return (
    <TouchableHighlight
      {...rest}
      onPress={onPressHandler}
      underlayColor={colors.underlayColor}
      style={styles.container}
    >
      {React.cloneElement(children, {
        onPress: onPressHandler
      })}
    </TouchableHighlight>
  );
};

Link.defaultProps = {
  params: {}
};

Link.propTypes = {
  children: PropTypes.element.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  to: PropTypes.string.isRequired,
  params: PropTypes.objectOf(PropTypes.any.isRequired)
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default withNavigation(Link);
