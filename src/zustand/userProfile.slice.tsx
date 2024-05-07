import {StateCreator} from 'zustand';
import {userProfileSliceType} from '@_types/userProfile.type';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {zustandPersistKey} from '@constants/index';
import {sliceResetFns} from '.';

const initialState = {
  userDetails: null,
};

export const userProfileSlice: StateCreator<
  userProfileSliceType,
  [],
  [['zustand/persist', userProfileSliceType]]
> = persist(
  set => {
    sliceResetFns.add(() => set(initialState));
    return {
      ...initialState,
      updateUserDetails: (details: any) => set(() => ({userDetails: details})),
    };
  },
  {
    name: zustandPersistKey.userProfile,
    storage: createJSONStorage(() => AsyncStorage),
  },
);
