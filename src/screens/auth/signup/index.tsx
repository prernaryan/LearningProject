import {View, Button} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from '@services/navigationService';
import {RouteName} from '@constants/routeName';

const Signup = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Button title="Login" onPress={() => navigate(RouteName.LOGIN)} />
    </View>
  );
};

export default Signup;
