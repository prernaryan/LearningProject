import {Alert} from 'react-native';
import {emptyFunction} from './helperFunction';
import {KEYBOARD_TYPE} from '@constants/appConstants';

export function showAlertDialog(
  title: string,
  message: string,
  buttonTitle: string,
  callback: Function,
) {
  Alert.alert(
    title,
    message,
    [{text: buttonTitle, onPress: callback?.(), style: KEYBOARD_TYPE.Default}],
    {cancelable: false},
  );
}

export function showDoubleActionAlertDialog(
  title: string,
  message: string,
  positiveTitle: string,
  positiveCallback: Function,
  negativeTitle: string,
  negativeCallback: Function,
) {
  Alert.alert(
    title,
    message,
    [
      {
        text: negativeTitle,
        style: 'cancel',
        onPress: () => negativeCallback?.(),
      },
      {
        text: positiveTitle,
        style: 'destructive',
        onPress: () => positiveCallback?.(),
      },
    ],
    {cancelable: false},
  );
}
export function showTripleActionAlertDialog(
  title: string,
  message: string,
  positiveTitle: string,
  positiveCallback: Function,
  negativeTitle: string,
  negativeCallback: Function,
  neutralTitle: string,
) {
  Alert.alert(
    title,
    message,
    [
      {
        text: positiveTitle,
        style: 'default',
        onPress: positiveCallback?.(),
      },
      {
        text: negativeTitle,
        style: 'destructive',
        onPress: negativeCallback?.(),
      },
      {
        text: neutralTitle,
        style: 'cancel',
        onPress: emptyFunction,
      },
    ],
    {cancelable: false},
  );
}
