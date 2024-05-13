import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@services/navigationService';
import {ConstNumber} from '@constants/index';
import {MainNavigationType, RootStackParamList} from '@_types/navigation.type';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {SCREENS} from '@constants/routeName';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = ({
  initialRouteName,
}: MainNavigationType): React.JSX.Element => {
  const onReadyNavigation = React.useCallback((): void => {
    setTimeout(() => {
      SplashScreen.hide();
    }, ConstNumber.VALUE_3000);
  }, []);

  const RenderNavigationScreens = React.useMemo((): React.JSX.Element[] => {
    return Object.keys(SCREENS).map((item: string) => (
      <Stack.Screen
        key={`Screen-${item}`}
        //@ts-ignore
        name={item}
        //@ts-ignore
        component={SCREENS[item]}
      />
    ));
  }, []);
  return (
    <NavigationContainer onReady={onReadyNavigation} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {RenderNavigationScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainNavigator);
