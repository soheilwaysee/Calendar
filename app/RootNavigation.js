import { Dashboard, EventForm, NextScreen } from 'screens';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { DrawerContent, ColorPicker } from 'components';
import { colors } from 'utils/theme';

const EventStack = createStackNavigator(
  {
    Dashboard,
    NextScreen,
    EventForm,
    ColorPicker
  },
  {
    initialRouteName: 'Dashboard',
    cardStyle: {
      backgroundColor: colors.white
    }
  }
);

export default createDrawerNavigator(
  {
    EventStack
  },
  {
    contentComponent: DrawerContent
  }
);
