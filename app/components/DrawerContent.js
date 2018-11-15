import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import { Image, Text, DrawerItem } from 'components';
import { colors } from 'utils/theme';
import PropTypes from 'prop-types';

const DrawerContent = ({ navigation }) => {
  const navigateHandler = (routeName, params) => () => {
    navigation.closeDrawer();
    navigation.navigate(routeName, params);
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('assets/images/avatar.jpg')}
          />
          <Text style={styles.info}>Calendar</Text>
        </View>
        <DrawerItem
          text="Day"
          navigateHandler={navigateHandler('Dashboard', {
            days: 1,
            date: undefined,
            show: false
          })}
          iconName="view-day"
        />
        <DrawerItem
          navigateHandler={navigateHandler('Dashboard', {
            days: 3,
            date: undefined,
            show: false
          })}
          text="3 Day"
          iconName="view-week"
        />
        <DrawerItem
          navigateHandler={navigateHandler('Dashboard', {
            days: 7,
            date: undefined,
            show: false
          })}
          text="Week"
          iconName="view-week"
        />
        <DrawerItem
          navigateHandler={navigateHandler('Dashboard', {
            days: 30,
            day: undefined,
            show: false
          })}
          text="Month"
          iconName="view-module"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

DrawerContent.propTypes = {
  navigation: PropTypes.shape({
    closeDrawer: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    overflow: 'hidden',
    marginRight: 20
  },
  avatar: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 50
  },
  info: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.lightBalck
  }
});

export default DrawerContent;
