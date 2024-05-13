import {colors} from '@constants/colors';
import {GlobalStyleValues} from '@constants/globalStyle';
import {ConstNumber, PercentageConstants} from '@constants/numbers';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: colors.black.wrapper,
  },
  mask: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: GlobalStyleValues.TransParent,
  },
  container: {
    backgroundColor: colors.white[ConstNumber.VALUE_1],
    width: PercentageConstants.PERCENT_100,
    height: ConstNumber.VALUE_0,
    overflow: GlobalStyleValues.HIDDEN,
  },
  draggableContainer: {
    width: PercentageConstants.PERCENT_100,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: GlobalStyleValues.TransParent,
  },
  draggableIcon: {
    width: ConstNumber.VALUE_35,
    height: ConstNumber.VALUE_5,
    borderRadius: ConstNumber.VALUE_5,
    margin: ConstNumber.VALUE_10,
    backgroundColor: colors.white.light_white,
  },
});

export default styles;
