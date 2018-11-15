import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Text } from 'components';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';

const SubmitButton = ({ form, label }) => (
  <Button
    style={styles.container}
    disabled={!form.isValid}
    block
    onPress={form.handleSubmit}
  >
    <Text>{label}</Text>
  </Button>
);

SubmitButton.propTypes = {
  form: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired
  }).isRequired,
  label: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: { marginVertical: 20, marginLeft: 15 }
});

export default props => <Field {...props} component={SubmitButton} />;
