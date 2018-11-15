import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'components';
import { colors } from 'utils/theme';
import { weekDays } from 'utils/helpers';
import { PropTypes } from 'prop-types';

const EventCard = ({ event, navigation }) => {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const navigateHandler = () =>
    navigation.navigate('EventForm', {
      event: {
        ...event,
        start,
        end
      }
    });

  return (
    <TouchableHighlight
      underlayColor={colors.invisible}
      onPress={navigateHandler}
      style={styles.container}
    >
      <>
        <View style={styles.leftCard}>
          <Text style={styles.leftCardDate}>{start.getDate()}</Text>
          <Text style={styles.leftCardWeekday}>{weekDays[start.getDay()]}</Text>
        </View>
        <View style={[styles.reminderContainer, { borderColor: event.color }]}>
          <Text style={[styles.reminderTitle, { color: event.color }]}>
            Reminder: {'"'}
            {event.title}
            {'"'}
          </Text>
          <Text style={[styles.reminderLocation, { color: event.color }]}>
            {start.getHours()}:{start.getMinutes()}-{end.getHours()}:
            {end.getMinutes()}
            {'    '}
            {event.location}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftCard: { padding: 8 },
  leftCardDay: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  leftCardWeekday: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.transparentBlack
  },
  leftCardDate: {
    color: colors.transparentBlack
  },
  reminderContainer: {
    width: '60%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 4,
    borderWidth: 1
  },
  reminderTitle: {
    fontSize: 12
  },
  reminderLocation: { fontSize: 12 }
};

export default withNavigation(EventCard);
