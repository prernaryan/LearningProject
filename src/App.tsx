import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {ConstNumber, GlobalStyleValues, RouteName} from './constants';
import {NetworkProvider} from './contextApi/NetworkContext';
import ToastBanner from '@components/reuseableComponents/toastBanner';
import {NativeBaseProvider, StatusBar} from 'native-base';
import MainNavigator from './navigator/mainNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import UserAppState from '@components/userAppState';
import {RootStackParamList} from '@_types/navigation.type';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: true,
      retry: ConstNumber.VALUE_5,
      staleTime: ConstNumber.VALUE_500,
    },
  },
});
const App = (): React.JSX.Element => {
  const [initialRoutename, setInitialRouteName] = React.useState<
    keyof RootStackParamList
  >(RouteName.LOGIN);

  return (
    <GestureHandlerRootView style={{flex: ConstNumber.VALUE_1}}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <NetworkProvider>
            <StatusBar
              translucent
              backgroundColor={GlobalStyleValues.TransParent}
              barStyle={GlobalStyleValues.DARK_CONTENT}
            />
            <UserAppState setInitialRouteName={setInitialRouteName}>
              <MainNavigator initialRouteName={initialRoutename} />
            </UserAppState>
            <FlashMessage
              position={GlobalStyleValues.TOP}
              //@ts-ignore
              renderCustomContent={options => <ToastBanner options={options} />}
            />
          </NetworkProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
