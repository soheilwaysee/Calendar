import actionTypes from 'redux/actionTypes';
import { guid, getDates, orderDate } from 'utils/helpers';
import { colors } from 'utils/theme';

const initialState = [
  {
    title: 'Front-End',
    uid: guid(),
    location: 'Google Office',
    color: colors.primary,
    ...getDates(1),
    allDay: true
  },
  {
    title: 'Back-End',
    uid: guid(),
    location: 'Google Office',
    color: colors.success,
    ...getDates(2),
    allDay: true
  },
  {
    title: 'IOS Team',
    location: 'Google Office',
    uid: guid(),
    color: colors.primary,
    ...getDates(7),
    allDay: true
  },
  {
    title: 'Android Team',
    location: 'Google Office',
    uid: guid(),
    color: colors.primary,
    ...getDates(34),
    allDay: true
  },
  {
    title: 'Android Team',
    location: 'Google Office',
    uid: guid(),
    color: colors.warning,
    ...getDates(10),
    allDay: true
  },
  {
    title: 'Android Team',
    location: 'Google Office',
    uid: guid(),
    color: colors.primary,
    ...getDates(12),
    allDay: true
  },
  {
    title: 'Android Team',
    location: 'Google Office',
    uid: guid(),
    color: colors.warning,
    ...getDates(20),
    allDay: true
  }
];

const reducer = (state = orderDate(initialState), action) => {
  switch (action.type) {
    case actionTypes.EVENTFORM: {
      const {
        payload: { uid }
      } = action;
      const index = state.findIndex(event => event.uid === uid);
      const unOrderState =
        index !== -1
          ? Object.assign([], state, { [index]: action.payload })
          : state.concat({
              ...action.payload,
              uid: guid()
            });
      const result = orderDate(unOrderState);
      return result;
    }

    default:
      return state;
  }
};

export default reducer;
