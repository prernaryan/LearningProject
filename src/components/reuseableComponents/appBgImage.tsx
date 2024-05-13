import React from 'react';
import {ImageBackground, StyleSheet, ImageSourcePropType} from 'react-native';
import {PercentageConstants, images} from '@constants/index';

const styles = StyleSheet.create({
  imageStyle: {
    width: PercentageConstants.PERCENT_100,
    height: PercentageConstants.PERCENT_100,
  },
});

interface AppBgImageProps {
  children?: React.ReactNode;
  source?: ImageSourcePropType;
}

const AppBgImage = ({
  children,
  source,
}: AppBgImageProps): React.ReactElement => {
  const image = source || images.appBackgroundImage;
  return (
    <ImageBackground source={image} style={styles.imageStyle}>
      {children}
    </ImageBackground>
  );
};

export default React.memo(AppBgImage);
