import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input as InputNative } from 'native-base';
import { Field } from 'formik';
import { Icon as IconNative, Item, Text } from 'components';
import { StyleSheet } from 'react-native';
import { colors, ICON_SIZE } from 'utils/theme';

export class TextInput extends PureComponent {
  static propTypes = {
    form: PropTypes.shape({
      setFieldValue: PropTypes.func.isRequired
    }).isRequired,
    field: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    placeholder: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    iconGroup: PropTypes.string.isRequired
  };

  state = {
    isFocused: false
  };

  focusHandler = () => this.setState({ isFocused: true });

  blurHandler = () => this.setState({ isFocused: false });

  render() {
    const { isFocused } = this.state;
    const { form, field, iconName, iconGroup, placeholder } = this.props;
    const handleChange = value => {
      form.setFieldValue(field.name, value);
      form.setFieldTouched(field.name);
    };
    const Icon = IconNative[iconGroup];
    const error = form.errors[field.name];
    return (
      <>
        <Item
          error={!!error}
          style={[styles.container, isFocused && !error && styles.focused]}
        >
          <Icon
            size={ICON_SIZE}
            style={[!!error && styles.errorColor]}
            name={iconName}
          />
          <InputNative
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            placeholder={placeholder}
            value={field.value}
            onChangeText={handleChange}
          />
        </Item>
        <Text style={styles.error}>{error || ''}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  focused: { borderBottomColor: colors.primary },
  errorColor: { color: colors.danger },
  error: { marginLeft: 20, color: colors.danger, fontSize: 12 }
});
export default props => <Field {...props} component={TextInput} />;
