import React from 'react';
import {View} from 'react-native';
import {RouteName, StyleBase} from '@constants/index';
import {RootStackParamList} from '@_types/navigation.type';

type UserAppStateType = {
  children: React.ReactNode;
  setInitialRouteName: (routeName: keyof RootStackParamList) => void;
};

const UserAppState = ({
  children,
  setInitialRouteName,
}: UserAppStateType): React.JSX.Element => {
  React.useEffect((): void => {
    setInitialRouteName(RouteName.LOGIN);
  }, []);
  return <View style={StyleBase.flex1}>{children}</View>;
};

export default React.memo(UserAppState);
