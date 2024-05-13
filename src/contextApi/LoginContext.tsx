import React from 'react';
import {LoginContextProps} from '@_types/Login.type';

export const LoginContext = React.createContext({} as LoginContextProps);

export const LoginProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const contextValue = React.useMemo((): LoginContextProps => ({}), []);
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
