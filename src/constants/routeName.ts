import Login from '@screens/auth/login';
import Signup from '@screens/auth/signup';

export enum RouteName {
  LOGIN = 'login',
  SIGNUP = 'signup',
}
export const SCREENS = {
  [RouteName.LOGIN]: Login,
  [RouteName.SIGNUP]: Signup,
};
