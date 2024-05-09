import {Platform, View} from 'react-native';
import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {GlobalStyleValues} from './constants';
import {NetworkProvider} from './contextApi/NetworkContext';
import ToastBanner from '@components/reuseableComponents/toastBanner';
import {AppText} from '@components/reuseableComponents/appText';
import {StatusBar} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

const App = (): React.JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{marginTop: 70}}>
      <NetworkProvider>
        <StatusBar
          translucent
          backgroundColor={GlobalStyleValues.TransParent}
          barStyle={GlobalStyleValues.DARK_CONTENT}
        />
        <FlashMessage
          position={GlobalStyleValues.TOP}
          //@ts-ignore
          renderCustomContent={options => <ToastBanner options={options} />}
        />

        <AppText>App</AppText>
      </NetworkProvider>
    </View>
  );
};

export default App;
