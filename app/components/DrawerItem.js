import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Icon, Text } from 'components';
import { colors } from 'utils/theme';
import PropTypes from 'prop-types';

const DrawerItem = ({ iconName, text, navigateHandler }) => (
  <TouchableHighlight
    style={styles.container}
    underlayColor={colors.underlayColor}
    onPress={navigateHandler}
  >
    <>
      <Icon.MaterialCommunityIcons
        size={25}
        style={styles.icon}
        name={iconName}
      />
      <Text uppercase={false} style={styles.text}>
        {text}
      </Text>
    </>
  </TouchableHighlight>
);

DrawerItem.propTypes = {
  navigateHandler: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 5,
    paddingVertical: 5,
    flexDirection: 'row'
  },
  icon: {
    marginHorizontal: 10
  },
  text: {
    flex: 1,
    color: colors.lightBlack
  }
});

export default DrawerItem;
