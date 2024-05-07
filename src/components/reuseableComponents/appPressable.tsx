import {ConstNumber} from '@constants/numbers';
import React from 'react';
import {Pressable, PressableProps} from 'react-native';

const AppPressable = ({
  style,
  ...props
}: Readonly<PressableProps>): React.JSX.Element => (
  <Pressable
    style={({pressed}) =>
      [
        {opacity: pressed ? ConstNumber.VALUE_07 : ConstNumber.VALUE_1},
        style,
      ] as never
    }
    {...props}>
    {props.children}
  </Pressable>
);
export default React.memo(AppPressable);
