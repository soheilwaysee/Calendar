import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import {
  HamburgerMenu,
  Button,
  Icon,
  Calendar,
  EventCard,
  Fab
} from 'components';
import { colors, ICON_SIZE } from 'utils/theme';
import { connect } from 'react-redux';
import { Container, Root } from 'native-base';
import { sameDay, monthNames } from 'utils/helpers';

const Dashboard = ({ navigation, events }) => {
  const dateParam = navigation.getParam('date');
  return (
    <Root>
      <Container>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {navigation.getParam('show') && (
            <>
              <Calendar
                {...dateParam && {
                  current: dateParam.toISOString().split('T')[0]
                }}
                style={styles.calendar}
                onDayPress={day => {
                  navigation.navigate('Dashboard', {
                    date: new Date(day.dateString)
                  });
                }}
                onDayLongPress={day => {
                  navigation.navigate('Dashboard', {
                    date: new Date(day.dateString)
                  });
                }}
              />
              <Button
                full
                transparent
                style={styles.btn}
                onPress={() =>
                  navigation.navigate('Dashboard', {
                    show: false,
                    date: undefined,
                    days: 30
                  })
                }
              >
                <Icon.Ionicons size={ICON_SIZE} name="ios-arrow-up" />
              </Button>
            </>
          )}
          {events
            .filter(item => {
              if (dateParam) {
                const dayResult = sameDay(dateParam, item.start);
                return dayResult;
              }
              const addDays = new Date();
              addDays.setDate(
                addDays.getDate() + Number(navigation.getParam('days', 30))
              );
              const startDate = item.start;
              const result = addDays.getTime() - startDate.getTime();
              return result > 0;
            })
            .map(event => (
              <EventCard event={event} key={event.uid} />
            ))}
        </ScrollView>
      </Container>
      <Fab />
    </Root>
  );
};

Dashboard.navigationOptions = ({ navigation }) => {
  const show = navigation.getParam('show');
  const toggleHandler = () =>
    navigation.setParams({
      show: !show,
      date: new Date()
    });

  return {
    headerLeft: <HamburgerMenu />,
    navigationOptions: {
      cardStyle: {
        backgroundColor: colors.danger
      }
    },
    headerTitle: () =>
      show ? null : (
        <Button style={styles.title} onPress={toggleHandler} transparent>
          <Text style={styles.month}>{Dashboard.getMonth()}</Text>
          <Icon.Ionicons
            size={20}
            name={show ? 'ios-arrow-up' : 'ios-arrow-down'}
          />
        </Button>
      )
  };
};

Dashboard.getMonth = () => {
  const date = new Date();

  return monthNames[date.getMonth()];
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: { marginTop: 20 },
  btn: { backgroundColor: colors.white },
  title: {
    flexDirection: 'column',
    width: '80%'
  },
  month: { color: colors.lightBlack }
});

export default connect(({ events }) => ({ events }))(Dashboard);
