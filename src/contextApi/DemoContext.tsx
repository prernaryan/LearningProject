import React from 'react';
import {DemoContextProps} from '@_types/Demo.type';

export const DemoContext = React.createContext({} as DemoContextProps);

export const DemoProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const contextValue = React.useMemo((): DemoContextProps => ({}), []);

  return (
    <DemoContext.Provider value={contextValue}>{children}</DemoContext.Provider>
  );
};
