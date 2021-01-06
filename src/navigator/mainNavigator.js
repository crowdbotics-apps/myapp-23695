import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190619Navigator from '../features/UserProfile190619/navigator';
import Tutorial190618Navigator from '../features/Tutorial190618/navigator';
import NotificationList190590Navigator from '../features/NotificationList190590/navigator';
import Settings190589Navigator from '../features/Settings190589/navigator';
import Settings190581Navigator from '../features/Settings190581/navigator';
import UserProfile190579Navigator from '../features/UserProfile190579/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190619: { screen: UserProfile190619Navigator },
Tutorial190618: { screen: Tutorial190618Navigator },
NotificationList190590: { screen: NotificationList190590Navigator },
Settings190589: { screen: Settings190589Navigator },
Settings190581: { screen: Settings190581Navigator },
UserProfile190579: { screen: UserProfile190579Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
