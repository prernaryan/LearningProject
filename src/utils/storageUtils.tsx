import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataLocally = async (key: string, value: any) =>
  AsyncStorage.setItem(key, JSON.stringify(value));
export const getDataLocally = async (key: string) => {
  const data: any = await AsyncStorage.getItem(key);
  return JSON.parse(data);
};
export const removeLocalData = (key: string) => {
  AsyncStorage.removeItem(key);
};
