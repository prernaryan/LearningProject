import React from 'react';
import {View} from 'react-native';

import {heightPixel, widthPixel} from '@utils/responsive';

type marginSizeType = {
  size: number;
};

export const MarginTopView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginTop: heightPixel(size)}}>{children}</View>;
  },
);
export const MarginLeftView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginLeft: widthPixel(size)}}>{children}</View>;
  },
);
export const MarginRightView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginRight: widthPixel(size)}}>{children}</View>;
  },
);
export const MarginHorizontalView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginHorizontal: widthPixel(size)}}>{children}</View>;
  },
);

export const MarginVerticleView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginVertical: heightPixel(size)}}>{children}</View>;
  },
);
export const MarginBottomView = React.memo(
  (props: React.PropsWithChildren<marginSizeType>): React.JSX.Element => {
    const {children, size} = props;
    return <View style={{marginTop: heightPixel(size)}}>{children}</View>;
  },
);
