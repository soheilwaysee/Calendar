import React from 'react';
import { Item, Button, Text, Icon } from 'components';
import { ActionSheet as ActionSheetNative } from 'native-base';
import { Field } from 'formik';
import { StyleSheet } from 'react-native';
import { colors, ICON_SIZE } from 'utils/theme';
import PropTypes from 'prop-types';

const ActionSheet = ({
  buttons,
  cancelIndex,
  destructiveIndex,
  form,
  field
}) => {
  const displayHandler = () =>
    ActionSheetNative.show(
      {
        options: buttons,
        cancelButtonIndex: cancelIndex,
        destructiveButtonIndex: destructiveIndex,
        title: 'Testing ActionSheet'
      },
      buttonIndex => {
        form.setFieldValue(field.name, buttons[buttonIndex]);
      }
    );

  return (
    <Item>
      <Button onPress={displayHandler} transparent style={styles.button}>
        <Icon.MaterialCommunityIcons size={ICON_SIZE} name="bell-ring" />
        <Text style={styles.text}>Remind Me</Text>
      </Button>
    </Item>
  );
};

ActionSheet.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cancelIndex: PropTypes.number.isRequired,
  destructiveIndex: PropTypes.number.isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 80
  },
  text: { color: colors.black }
});

export default props => <Field component={ActionSheet} {...props} />;
