import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Item, Label, Button } from 'components';
import { TextInput as Input } from 'components/form/Input';
import { colors } from 'utils/theme';
import PropTypes from 'prop-types';

const NextScreen = ({ navigation }) => {
  const label = navigation.getParam('label', '');
  const onChangeText = navigation.getParam('onChangeText');
  const navigateHandler = () => navigation.navigate('EventForm');
  return (
    <View style={styles.container}>
      <Item stackedLabel style={styles.title}>
        <Label>{label}</Label>
        <Input onChangeText={onChangeText} placeholder="Enter title" />
      </Item>
      <Button onPress={navigateHandler}>
        <Text>Done</Text>
      </Button>
    </View>
  );
};

NextScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }).isRequired
};
const styles = StyleSheet.create({
  container: { backgroundColor: colors.white },
  title: { marginBottom: 20 }
});
export default NextScreen;
