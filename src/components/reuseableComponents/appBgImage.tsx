import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {PercentageConstants, images} from '@constants/index';

const styles = StyleSheet.create({
  imageStyle: {
    width: PercentageConstants.PERCENT_100,
    height: PercentageConstants.PERCENT_100,
  },
});

const AppBgImage = ({children}: React.PropsWithChildren): React.JSX.Element => {
  const image = images.appBackgroundImage;
  return (
    <ImageBackground source={image} style={styles.imageStyle}>
      {children}
    </ImageBackground>
  );
};

export default React.memo(AppBgImage);
