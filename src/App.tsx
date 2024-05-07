import {View, Text} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {GlobalStyleValues} from './constants';
import {NetworkProvider} from './contextApi/NetworkContext';
import ToastBanner from '@components/reuseableComponents/toastBanner';

const App = (): React.JSX.Element => {
  return (
    <View>
      <NetworkProvider>
        <Text>App</Text>
        <FlashMessage
          position={GlobalStyleValues.TOP}
          //@ts-ignore
          renderCustomContent={options => <ToastBanner options={options} />}
        />
      </NetworkProvider>
    </View>
  );
};

export default App;
