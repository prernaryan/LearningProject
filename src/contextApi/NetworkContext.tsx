import React from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {NetworkContextProps} from '@_types/network.type';

export const NetworkContext = React.createContext({} as NetworkContextProps);

const NetworkProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleConnectivityChange = (state: NetInfoState) => {
    setIsConnected(state.isConnected ?? false);
  };

  const retryCheck = React.useCallback((): void => {
    NetInfo.fetch().then((state: any) => {
      setIsConnected(state.isConnected);
    });
  }, [setIsConnected]);

  const contextValue = React.useMemo(
    (): NetworkContextProps => ({
      isConnected,
      retryCheck,
    }),
    [isConnected, retryCheck],
  );

  return (
    <NetworkContext.Provider value={contextValue}>
      {children}
    </NetworkContext.Provider>
  );
};

const useNetwork = (): NetworkContextProps => {
  return React.useContext(NetworkContext);
};

export {NetworkProvider, useNetwork};
