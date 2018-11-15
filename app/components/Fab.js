import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'components';
import ActionButton from 'react-native-action-button';
import { withNavigation } from 'react-navigation';
import { colors } from 'utils/theme';
import PropTypes from 'prop-types';

const Fab = ({ navigation }) => {
  const navigateHandler = () => navigation.navigate('EventForm');
  return (
    <ActionButton buttonColor={colors.buttonColor}>
      <ActionButton.Item
        buttonColor={colors.actionButtonBg}
        title="New Event"
        onPress={navigateHandler}
      >
        <Icon.Ionicons name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
};

Fab.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: colors.white
  }
});

export default withNavigation(Fab);
