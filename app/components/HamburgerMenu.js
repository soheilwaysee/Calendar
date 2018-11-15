import React from 'react';
import { withNavigation } from 'react-navigation';
import { Button, Icon } from 'components';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ICON_SIZE } from 'utils/theme';

const HamburgerMenu = ({ navigation }) => {
  const openDrawerHandler = () => navigation.openDrawer();
  return (
    <Button style={styles.container} transparent onPress={openDrawerHandler}>
      <Icon.Ionicons size={ICON_SIZE} name="ios-menu" />
    </Button>
  );
};

HamburgerMenu.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: { marginLeft: 10 }
});
export default withNavigation(HamburgerMenu);
