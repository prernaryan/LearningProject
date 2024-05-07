import {ConstNumber} from '@constants/numbers';
import {heightPixel, widthPixel} from '@utils/responsive';
import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const ToastIcon = (props: SvgProps) => {
  return (
    <Svg
      width={widthPixel(ConstNumber.VALUE_32)}
      height={heightPixel(ConstNumber.VALUE_32)}
      viewBox="0 0 32 32"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle opacity={0.2} cx={16} cy={16} r={16} fill="#fff" />
      <Path
        d="M20 12l-8 8M12 12l8 8"
        stroke="#fff"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default React.memo(ToastIcon);
