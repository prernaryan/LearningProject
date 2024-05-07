module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigator': './src/navigator',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@contextAPI': './src/contextApi',
          '@reactQuery': './src/reactQuery',
          '@_types': './src/types',
          '@zustand': './src/zustand',
        },
      },
    ],
  ],
};
