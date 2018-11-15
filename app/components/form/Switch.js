import React from 'react';
import { Switch as SwitchNative, StyleSheet } from 'react-native';
import { Icon, Text, Item } from 'components';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { ICON_SIZE } from 'utils/theme';

const Switch = ({ disabled, label, iconName, field, form }) => {
  const changeHandler = () => form.setFieldValue(field.name, !field.value);
  return (
    <Item>
      <Icon.Ionicons size={ICON_SIZE} name={iconName} />
      <Text style={styles.label}>{label}</Text>
      <SwitchNative
        style={styles.switch}
        value={field.value}
        disabled={disabled}
        onValueChange={changeHandler}
      />
    </Item>
  );
};

Switch.defaultProps = {
  disabled: false
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool
  }).isRequired
};

const styles = StyleSheet.create({
  label: { marginLeft: 4 },
  switch: { marginLeft: 'auto' }
});

export default props => <Field {...props} component={Switch} />;
