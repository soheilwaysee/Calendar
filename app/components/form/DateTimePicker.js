import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Field } from 'formik';
import { Item, Text, Icon } from 'components';
import PropTypes from 'prop-types';
import { colors, ICON_SIZE } from 'utils/theme';

class DateTimePickerTester extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    form: PropTypes.shape({ setFieldValue: PropTypes.func.isRequired })
      .isRequired,
    field: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.instanceOf(Date)
    }).isRequired,
    mode: PropTypes.oneOf(['date', 'time', 'datetime']).isRequired
  };

  state = {
    isDateTimePickerVisible: false
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = date => {
    const { form, field } = this.props;
    form.setFieldValue(field.name, date);
    this.hideDateTimePicker();
  };

  render() {
    const { isDateTimePickerVisible } = this.state;
    const { mode, label, field, form } = this.props;
    const error = form.errors[field.name];
    const touched = form.touched[field.name];
    return (
      <>
        <Item>
          <TouchableOpacity
            style={styles.labelContainer}
            onPress={this.showDateTimePicker}
          >
            <Icon.MaterialIcons size={ICON_SIZE} name="date-range" />
            <Text>{label}</Text>
          </TouchableOpacity>

          <View style={styles.datePickerContainer}>
            <DateTimePicker
              date={field.value}
              mode={mode}
              isVisible={isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </View>
        </Item>
        <Text style={styles.error}>{(touched && error) || ''}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  datePickerContainer: {
    flex: 1
  },
  labelContainer: { flexDirection: 'row', alignItems: 'center' },
  error: { marginLeft: 20, color: colors.danger, fontSize: 12 }
});

export default props => <Field {...props} component={DateTimePickerTester} />;
