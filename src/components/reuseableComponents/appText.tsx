import {colors} from '@constants/colors';
import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';

interface Props extends TextProps {
  children?: ReactNode;
}

export const AppText = ({style, ...props}: Readonly<Props>): JSX.Element => {
  return (
    <Text
      style={[{color: colors.black.main}, style]}
      {...props}
      allowFontScaling={true}>
      {props?.children}
    </Text>
  );
};
