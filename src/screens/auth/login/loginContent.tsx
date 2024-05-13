import {Button} from 'react-native';
import React from 'react';
import {navigate} from '@services/navigationService';
import {RouteName} from '@constants/routeName';
import {Flex} from 'native-base';

const LoginContent = (): React.JSX.Element => {
  return (
    <Flex>
      <Button title="Signup" onPress={() => navigate(RouteName.SIGNUP)} />
    </Flex>
  );
};

export default LoginContent;
