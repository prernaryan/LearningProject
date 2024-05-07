import {StyleSheet} from 'react-native';
import {
  ConstNumber,
  GlobalStyleValues,
  StyleBase,
  colors,
  fonts,
} from '@constants/index';
import {
  SCREEN_WIDTH,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';

export const commonStyles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_60),
    marginVertical: heightPixel(ConstNumber.VALUE_7),
  },
  horizontalStyle: {
    ...StyleBase.alignCenter,
  },
  inputHstack: {
    ...StyleBase.alignCenter,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_100),
  },
  inputContainer: {
    borderWidth: ConstNumber.VALUE_1,
    borderRadius: heightPixel(ConstNumber.VALUE_16),
    borderColor: colors.white.border,
    paddingVertical: heightPixel(ConstNumber.VALUE_16),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_16),
    backgroundColor: colors.white[ConstNumber.VALUE_1],
  },
  input: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontFamily: fonts.Montserrat_Black,
    color: colors.black.main,
  },
  placeholder: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    backgroundColor: colors.white[ConstNumber.VALUE_1],
    color: colors.gray.deepGray,
    fontFamily: fonts.Montserrat_Black,
    marginLeft: -widthPixel(ConstNumber.VALUE_3),
  },
  fieldError: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontFamily: fonts.Montserrat_Black,
    color: colors.red.fieldError,
    marginTop: heightPixel(ConstNumber.VALUE_8),
    marginRight: widthPixel(ConstNumber.VALUE_8),
    textAlign: GlobalStyleValues.LEFT,
  },
  astrickText: {
    color: colors.red.asteriskSymbol,
  },
  inputStyle: {
    color: colors.black.main,
    fontSize: fontPixel(ConstNumber.VALUE_17),
    fontFamily: fonts.Montserrat_Black,
    paddingVertical: ConstNumber.VALUE_0,
  },
  description: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontFamily: fonts.Montserrat_Black,
    marginLeft: widthPixel(ConstNumber.VALUE_9),
    lineHeight: fontPixel(ConstNumber.VALUE_20),
  },
  pressable: {
    marginTop: heightPixel(ConstNumber.VALUE_2),
  },
  innerDescription: {
    fontFamily: fonts.Montserrat_Black,
    color: colors.blue.btnBlue,
    lineHeight: fontPixel(ConstNumber.VALUE_20),
  },
  modalView: {
    borderRadius: heightPixel(ConstNumber.VALUE_15),
    backgroundColor: colors.white[ConstNumber.VALUE_1],
    marginTop: heightPixel(ConstNumber.VALUE_2),
    height: heightPixel(ConstNumber.VALUE_210),
    borderWidth: ConstNumber.VALUE_1,
  },
});
