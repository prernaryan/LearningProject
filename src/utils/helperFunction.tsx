import {Keyboard, Linking, Platform} from 'react-native';
import {FieldValues} from 'react-hook-form';
import {hasNotch, hasDynamicIsland, isTablet} from 'react-native-device-info';
import {showMessage} from 'react-native-flash-message';
import {heightPixel} from './responsive';
import {ConstNumber} from '@constants/numbers';
import {colors} from '@constants/colors';
import {popUpType} from '@constants/enums';
import Share, {ShareOptions} from 'react-native-share';
export const convertParamsToQueryString = (params: any): string => {
  if (!isValidData(params)) {
    return '';
  }
  const queryStringArr = [];
  for (const key of Object.keys(params)) {
    const value = params[key];
    if (isValidData(value)) {
      queryStringArr.push(`${key}=${params[key]}`);
    }
  }
  return `?${queryStringArr.join('&')}`;
};

export const isPlaformIos: boolean = Platform.OS === 'ios';

export const hasNotchOnDevice = hasNotch() || hasDynamicIsland();

export const handleBlurInput = (
  fieldName: keyof FieldValues,
  trigger: Function | null,
): any => {
  return (): void => {
    if (trigger) {
      trigger(fieldName);
    }
  };
};

export const isValidData = (data: any): boolean => {
  return data !== undefined && data !== null && data !== '';
};

export const capitalizeFirstletter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const emptyFunction = () => {};

export const objToFormData = (rawData: any) => {
  const formData: FormData = new FormData();
  if (rawData && rawData != null && typeof rawData === 'object') {
    Object.keys(rawData).map(item => {
      formData.append(item, rawData[item]);
    });
  }
  return formData;
};
export const removeBeginningBlankSpace = (value: string) =>
  value.replace(/^\s+/, ''); //Preventing to enter whitespace beginning of string

export const removeSpecialChar = (value: string) => {
  const temp = removeBeginningBlankSpace(value);
  return temp.replace(/[^A-Z ]+/i, ''); //Preventing to enter special character
};
export const keyboardDismiss = () => {
  Keyboard.dismiss();
};
export function extractNames(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const parts = fullName.trim().split(' ');
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts.slice(1).join(' ') : '';
  return {firstName, lastName};
}
export const ToastHandler = (
  message: any,
  isSuccess: boolean,
  description?: string,
): void => {
  const messageText =
    typeof message === 'string' ? message : JSON.stringify(message);
  return showMessage({
    message: messageText,
    description,
    backgroundColor: colors.transparent,
    color: colors.transparent,
    style: {
      height: heightPixel(ConstNumber.VALUE_48),
      bottom: heightPixel(ConstNumber.VALUE_20),
    },
    duration: ConstNumber.VALUE_3000,
    type: isSuccess ? popUpType.success : popUpType.danger,
  });
};

export const maskEmail = (email: string) => {
  const [username, domain] = email.split('@');
  const usernameLength = username.length;
  let maskedUsername = username.charAt(ConstNumber.VALUE_0); // Keep the first character unchanged
  for (
    let i = ConstNumber.VALUE_1;
    i < usernameLength - ConstNumber.VALUE_1;
    i++
  ) {
    if (i % ConstNumber.VALUE_3 !== ConstNumber.VALUE_0) {
      maskedUsername += '*';
    } else {
      maskedUsername += username.charAt(i);
    }
  }
  // Append the last character
  maskedUsername += username.charAt(usernameLength - ConstNumber.VALUE_1);

  return `${maskedUsername}@${domain}`;
};

export function checkAllFieldsValid(...fields: any) {
  return fields.every(
    (field: any) => field !== undefined && field !== null && field !== '',
  );
}
export function hasInvalidField(...fields: any) {
  return fields.some((field: any) => !isValidData(field));
}

export const isTabletDevice = () => {
  return isTablet();
};

type ShareParams = {
  title?: string;
  message?: string;
  url?: string;
};

export const handleShare = async ({
  title,
  message,
  url,
}: ShareParams): Promise<void> => {
  try {
    const options: ShareOptions = {
      title: title ?? 'DigiNerve',
      message: message ?? '',
      url: url ?? '',
    };
    await Share.open(options);
  } catch (error) {
    emptyFunction();
  }
};

export const handleUrlOpening = async (url: string): Promise<void> => {
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    Linking.openURL(url);
  }
};
