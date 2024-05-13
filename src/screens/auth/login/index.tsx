import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LoginProvider} from '@contextAPI/LoginContext';
import LoginContent from './loginContent';
import AppBgImage from '@components/reuseableComponents/appBgImage';
import {images} from '@constants/images';

const Login = (): React.JSX.Element => {
  const {top} = useSafeAreaInsets();
  return (
    <LoginProvider>
      <AppBgImage source={images.coffeeBgImage}>
        <View style={{marginTop: top}}>
          <LoginContent />
        </View>
      </AppBgImage>
    </LoginProvider>
  );
};

export default Login;
