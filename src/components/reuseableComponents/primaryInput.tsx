import React from 'react';
import {
  PercentageConstants,
  colors,
  GlobalStyleValues,
  StyleBase,
  ConstNumber,
} from '@constants/index';
import {
  View,
  TextInput,
  KeyboardType,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
  ReturnKeyTypeOptions,
} from 'react-native';
import {Controller} from 'react-hook-form';
import {heightPixel} from '@utils/responsive';
import {HStack} from 'native-base';
import {AppText} from './appText';
import AppPressable from './appPressable';
import {KEYBOARD_TYPE} from '@constants/appConstants';
import {commonStyles} from './styles';

type inputProps = {
  placeholder: string;
  fieldName: string;
  control: any;
  keyboardType?: KeyboardType;
  maxLength?: number;
  rightIcon?: React.JSX.Element;
  isSecure?: boolean;
  multiline?: boolean;
  error?: string;
  customInputStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  onPressIcon?: () => void;
  onBlurInput?: () => void;
  onfocus?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  customElements?: React.ReactNode;
  customLeftComp?: React.ReactNode;
  returnKeyType?: ReturnKeyTypeOptions;
  forwardedRef?: React.Ref<TextInput>;
  borderDark?: boolean;
  customInnerRightComp?: React.ReactNode;
  extraMainStyle?: ViewStyle;
  onSubmitEditing?: () => void;
};

const PrimaryInput = (props: inputProps): React.JSX.Element => {
  const {
    placeholder,
    keyboardType,
    maxLength,
    isSecure,
    rightIcon,
    control,
    fieldName,
    error,
    onPressIcon,
    onBlurInput,
    onfocus,
    multiline = false,
    customInputStyle,
    customTextStyle,
    onLayout,
    customElements = () => null,
    customLeftComp = () => null,
    returnKeyType,
    forwardedRef,
    borderDark,
    customInnerRightComp = () => null,
    extraMainStyle,
    onSubmitEditing,
  } = props;
  const [focusedField, setFocusedField] = React.useState<boolean>(false);
  const width = customInnerRightComp
    ? PercentageConstants.PERCENT_98
    : rightIcon
    ? PercentageConstants.PERCENT_90
    : PercentageConstants.PERCENT_100;

  let borderColor = error ? colors.red.fieldError : colors.white.border;

  if (focusedField && borderDark && !error) {
    borderColor = colors.black.main;
  }

  const inSingleRow = !multiline
    ? StyleBase.inRowSpacing
    : {paddingVertical: heightPixel(ConstNumber.VALUE_12)};
  return (
    <HStack style={commonStyles.horizontalStyle}>
      <View
        style={[commonStyles.mainContainer, extraMainStyle] as never}
        onLayout={onLayout}>
        <View
          style={[
            commonStyles.inputContainer,
            {borderColor},
            inSingleRow,
            customInputStyle,
          ]}>
          <HStack style={commonStyles.inputHstack}>
            {customLeftComp}
            <Controller
              control={control}
              render={({field: {onChange, value, onBlur}}) => {
                return (
                  <TextInput
                    ref={forwardedRef}
                    value={value}
                    underlineColorAndroid={colors.transparent}
                    placeholder={placeholder}
                    selectionColor={colors.black[ConstNumber.VALUE_1]}
                    placeholderTextColor={colors.gray.placeholder}
                    keyboardType={keyboardType ?? KEYBOARD_TYPE.Default}
                    maxLength={maxLength}
                    multiline={multiline}
                    onChangeText={onChange}
                    returnKeyType={returnKeyType}
                    onBlur={() => {
                      setFocusedField(false);
                      onBlur();
                      if (onBlurInput) {
                        onBlurInput();
                      }
                    }}
                    onFocus={() => {
                      onfocus?.();
                      setFocusedField(true);
                    }}
                    autoCorrect={false}
                    autoCapitalize={GlobalStyleValues.NONE}
                    secureTextEntry={isSecure}
                    style={[commonStyles.inputStyle, {width}, customTextStyle]}
                    onSubmitEditing={onSubmitEditing}
                  />
                );
              }}
              name={fieldName}
              rules={{required: true}}
            />
            {customInnerRightComp}
          </HStack>
          <AppPressable onPress={onPressIcon}>
            {rightIcon && rightIcon}
          </AppPressable>
        </View>
        <AppText style={commonStyles.fieldError}>{error}</AppText>
      </View>
      {customElements}
    </HStack>
  );
};

export default React.memo(PrimaryInput);
