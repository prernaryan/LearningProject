export type RootStackParamList = {
  login: undefined;
  signup: undefined;
};

export type MainNavigationType = {
  initialRouteName: keyof RootStackParamList | undefined;
};
