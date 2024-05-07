import {create} from 'zustand';
import {userProfileSlice} from './userProfile.slice';
import {userProfileSliceType} from '@_types/userProfile.type';

type storeType = userProfileSliceType;

export const sliceResetFns = new Set<() => void>();

export const resetAllSlices = (): void => {
  sliceResetFns.forEach(resetFn => resetFn());
};

export const useBoundStore = create<storeType>((...a) => ({
  ...userProfileSlice(...a),
}));
