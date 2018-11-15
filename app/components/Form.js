import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Form as FormNative } from 'native-base';
import { colors } from 'utils/theme';
import { isFunction, behavior } from 'utils/helpers';
import { object } from 'yup';
import { connect } from 'react-redux';

const Form = ({
  initialValues,
  validation,
  children,
  dispatch,
  type,
  onSuccess
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={object().shape(validation)}
    enableReinitialize
    onSubmit={payload => {
      dispatch({ type, payload });
      if (onSuccess) {
        onSuccess(payload);
      }
    }}
  >
    {props => (
      <KeyboardAvoidingView
        style={styles.container}
        enabled
        behavior={behavior}
        keyboardVerticalOffset={0}
      >
        <FormNative style={styles.form}>
          {isFunction(children)
            ? React.createElement(children, props)
            : children}
        </FormNative>
      </KeyboardAvoidingView>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 600
  },
  form: {
    padding: 20,
    width: '90%',
    backgroundColor: colors.white
  }
});

Form.defaultProps = {
  initialValues: undefined,
  validation: undefined,
  onSuccess: undefined
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  validation: PropTypes.objectOf(PropTypes.any.isRequired),
  initialValues: PropTypes.objectOf(PropTypes.any.isRequired),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ]).isRequired,
  onSuccess: PropTypes.func
};

export default connect()(Form);
