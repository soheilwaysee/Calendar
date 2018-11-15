import React from 'react';
import {
  Switch,
  Form,
  DateTimePicker,
  SubmitButton,
  TextInput as Input,
  ActionSheet,
  SelectColor
} from 'components';
import { Field } from 'formik';
import actionTypes from 'redux/actionTypes';
import { ScrollView, StyleSheet } from 'react-native';
import { colors } from 'utils/theme';
import { BUTTONS, DESTRUCTIVE_INDEX, CANCEL_INDEX } from 'utils/constants';
import { alphabet, date } from 'utils/validation';
import PropTypes from 'prop-types';

const validation = {
  title: alphabet,
  start: date,
  end: date
};

const EventForm = ({ navigation }) => {
  const onSuccessHandler = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <ScrollView>
      <Form
        validation={validation}
        type={actionTypes.EVENTFORM}
        initialValues={{
          color: colors.primary,
          ...navigation.getParam('event')
        }}
        onSuccess={onSuccessHandler}
        style={styles.form}
      >
        {({ setFieldValue, values }) => (
          <>
            <Input
              iconName="format-title"
              iconGroup="MaterialCommunityIcons"
              name="title"
              placeholder="Enter Title"
            />
            <Input
              iconName="add-location"
              iconGroup="MaterialIcons"
              name="location"
              placeholder="Enter Location"
            />

            <SelectColor setFieldValue={setFieldValue} color={values.color} />
            <DateTimePicker
              name="start"
              label="select start date and time"
              mode="datetime"
            />
            <Field name="uuu" component={NullComponent} />
            <DateTimePicker name="end" label="select end time" mode="time" />
            <Switch iconName="ios-stopwatch" name="allDay" label="All-day" />
            <ActionSheet
              name="reminder"
              buttons={BUTTONS}
              destructiveIndex={DESTRUCTIVE_INDEX}
              cancelIndex={CANCEL_INDEX}
            />
            <SubmitButton label="Save" />
          </>
        )}
      </Form>
    </ScrollView>
  );
};

EventForm.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  }).isRequired
};

EventForm.navigationOptions = ({ navigation }) => ({
  title: `${navigation.getParam('event') ? 'EDIT' : 'ADD'} EVENT`
});

const NullComponent = () => null;

const styles = StyleSheet.create({
  form: { backgroundColor: colors.danger }
});

export default EventForm;
