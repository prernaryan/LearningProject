import {View} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {GlobalStyleValues} from './constants';
import {NetworkProvider} from './contextApi/NetworkContext';
import ToastBanner from '@components/reuseableComponents/toastBanner';
import {AppText} from '@components/reuseableComponents/appText';
import {StatusBar} from 'native-base';

const App = (): React.JSX.Element => {
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
