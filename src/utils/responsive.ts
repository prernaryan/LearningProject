import {ConstNumber} from '@constants/index';
import {DimensionValue, Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const BASE_WIDTH = ConstNumber.VALUE_414;
const BASE_HEIGHT = ConstNumber.VALUE_896;
const ScaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;
const ScaleWidth = SCREEN_WIDTH / BASE_WIDTH;

export const fontPixel = (size: number) => heightPixel(size);

export const heightPixel = (h: number) => {
  return Math.round(h * ScaleHeight);
};

export const widthPixel = (w: number) => {
  return Math.round(w * ScaleWidth);
};

export const heightPercent = (percentage: number): DimensionValue => {
  return `${(percentage * ConstNumber.VALUE_100) / ConstNumber.VALUE_826}%`;
};

export const widthPercent = (percentage: number): DimensionValue => {
  return `${(percentage * ConstNumber.VALUE_100) / ConstNumber.VALUE_375}%`;
};
export const isIPad = SCREEN_HEIGHT / SCREEN_WIDTH < ConstNumber.VALUE_016;
