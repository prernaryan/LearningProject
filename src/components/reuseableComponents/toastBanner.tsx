import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SCREEN_WIDTH,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';
import {
  ConstNumber,
  StyleBase,
  colors,
  fonts,
  popUpType,
} from '@constants/index';
import {MessageOptions} from 'react-native-flash-message';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isPlaformIos} from '@utils/helperFunction';
import {isTablet} from 'react-native-device-info';
import ToastIcon from '@assets/svg/toastIcon';
import {AppText} from './appText';
type propsType = {
  options: MessageOptions;
};

type renderIconType = {
  backgroundColor: string;
};

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleBase.selfCenter,
  },
  container: {
    ...StyleBase.inRow,
    ...StyleBase.spaceBetween,
    borderRadius: widthPixel(ConstNumber.VALUE_8),
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_60),
    minHeight: heightPixel(ConstNumber.VALUE_48),
    paddingLeft: widthPixel(ConstNumber.VALUE_16),
    paddingRight: widthPixel(ConstNumber.VALUE_8),
  },
  textMsg: {
    maxWidth: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_120),
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontFamily: fonts.Montserrat_Black,
    color: colors.white[ConstNumber.VALUE_1],
    paddingRight: widthPixel(ConstNumber.VALUE_30),
  },
});

const ToastBanner = (props: propsType): React.JSX.Element => {
  const {options} = props;
  const {type, message} = options;

  const RenderIcon = React.useMemo((): renderIconType => {
    if (type === popUpType.success) {
      return {
        backgroundColor: colors.blue.loginText,
      };
    }
    return {
      backgroundColor: colors.red.fieldError,
    };
  }, [type]);
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={
        [
          styles.mainContainer,
          (!isPlaformIos || isTablet()) && {marginTop: top},
        ] as never
      }>
      <View
        style={[
          styles.container,
          {backgroundColor: RenderIcon.backgroundColor},
        ]}>
        <AppText style={styles.textMsg} numberOfLines={ConstNumber.VALUE_3}>
          {message}
        </AppText>
        <ToastIcon />
      </View>
    </View>
  );
};

export default React.memo(ToastBanner);
