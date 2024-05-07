import {Linking, Platform} from 'react-native';
import {
  check,
  NotificationSettings,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import {showDoubleActionAlertDialog} from './nativeAlert';
import {texts} from '@constants/texts';
import {ConstNumber} from '@constants/numbers';

export type MediaType = 'doc' | 'photo' | 'camera' | 'video' | 'any';
export enum AppPermissions {
  CAMERA = 'CAMERA',
  GALLERY = 'GALLERY',
  WRITE_EXTERNAL_STORAGE = 'WRITE_EXTERNAL_STORAGE',
  ACCESS_MEDIA_LOCATION = 'ACCESS_MEDIA_LOCATION',
}
export enum STATUS {
  UNAVAILABLE = 'unavailable',
  GRANTED = 'granted',
  LIMITED = 'limited',
  DENIED = 'denied',
  BLOCKED = 'blocked',
}

export type PermissionResponse = {
  status: PermissionStatus;
  settings?: NotificationSettings;
};

export type PermissionConfig = {
  success: Function;
  error: Function;
  permission: AppPermissions;
  shouldRequest?: boolean;
  alreadyRequested?: boolean;
  mediaType?: MediaType;
  translate?: any;
};

export class AppPermissionsUtils {
  private static readonly parseAppPermission = (
    appPermission: AppPermissions,
  ): Permission | AppPermissions => {
    const android13Permission = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
    switch (appPermission) {
      case AppPermissions.CAMERA:
        return Platform.select({
          android: PERMISSIONS.ANDROID.CAMERA,
          ios: PERMISSIONS.IOS.CAMERA,
        }) as Permission;
      case AppPermissions.GALLERY:
        return Platform.select({
          android:
            (Platform.Version as never) >= ConstNumber.VALUE_33
              ? android13Permission
              : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        }) as Permission;
      case AppPermissions.WRITE_EXTERNAL_STORAGE:
        return Platform.select({
          android:
            (Platform.Version as never) >= ConstNumber.VALUE_33
              ? PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION
              : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
        }) as Permission;
      default:
        return appPermission;
    }
  };

  static readonly requestAppPermission = (config: PermissionConfig) => {
    const {permission, shouldRequest = false} = config;
    const permissionString = AppPermissionsUtils.parseAppPermission(
      permission,
    ) as Permission;
    const promise = shouldRequest
      ? request(permissionString)
      : check(permissionString);
    promise?.then((response: PermissionStatus) => {
      const permissionResponse: PermissionResponse = {
        status: response ?? STATUS.UNAVAILABLE,
      };
      this.handlePermissionResponse(permissionResponse, config);
    });
  };

  private static readonly handlePermissionResponse = (
    response: PermissionResponse,
    config: PermissionConfig,
  ) => {
    const {success, error, alreadyRequested = false} = config;
    const status = response.status;
    if (status === STATUS.GRANTED || status === STATUS.LIMITED) {
      success?.();
    } else if (status === STATUS.DENIED) {
      if (!alreadyRequested) {
        AppPermissionsUtils.requestAppPermission({
          ...config,
          shouldRequest: true,
          alreadyRequested: true,
        });
      } else {
        error?.(status);
      }
    } else if (status === STATUS.BLOCKED) {
      showDoubleActionAlertDialog(
        texts.appName,
        texts.permissionRequired,
        texts.ok,
        () => {
          Linking.openSettings();
        },
        texts.cancel,
        () => {},
      );
    } else if (status === STATUS.UNAVAILABLE) {
      showDoubleActionAlertDialog(
        texts.appName,
        texts.noAvaiable,
        texts.ok,
        () => {
          Linking.openSettings();
        },
        texts.cancel,
        () => {},
      );
    }
  };
}
