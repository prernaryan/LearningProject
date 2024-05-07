// import ImageCropPicker from 'react-native-image-crop-picker';
// import {AppPermissions, AppPermissionsUtils} from './AppPermission';
// import {ConstNumber} from '@constants/numbers';

// /**
//  * Utility file for Picking Image and Documents
//  * From
//  * Camera
//  * Gallery
//  * etc
//  */

// /**
//  *
//  * @param isCamera If we have to open camera or Gallery
//  * @param successCallback If we get the Data successfully
//  * @param errorCallback If there is any kind of exception
//  * @param options Options configuration for Picker
//  */

// export type MediaType = 'doc' | 'photo' | 'camera' | 'video' | 'any';

// export const maxUploadSize = 30000000; //30mb
// export const maxFileUpload = 'Image size is too large.';

// const openPicker = (
//   isCamera: boolean,
//   successCallback: Function,
//   errorCallback: Function,
//   options: any,
// ) => {
//   const pickerPromise = isCamera
//     ? ImageCropPicker.openCamera(options)
//     : ImageCropPicker.openPicker(options);

//   pickerPromise
//     .then((data: any) => {
//       if (Array.isArray(data)) {
//         successCallback(data);
//       } else {
//         const arrayData = [];
//         arrayData.push(data || {});
//         successCallback(arrayData);
//       }
//     })
//     .catch((ex: any) => {
//       if (errorCallback) {
//         errorCallback(ex);
//       }
//     });
// };

// /**
//  *
//  * @param isCamera If we have to open camera or Gallery
//  * @param successCallback If we get the Data successfully
//  * @param errorCallback If there is any kind of exception
//  * @param uploadType The type of Data i.e photo or video or any
//  * @param enableCrop If we wanna show the cropper
//  * @param count Single or multiple
//  */
// export const initiatePicker = (
//   isCamera: boolean,
//   successCallback: Function,
//   errorCallback: Function,
//   uploadType: MediaType,
//   enableCrop: boolean,
//   count: number,
//   isMultiple = false,
// ) => {
//   const options = {
//     compressImageQuality: ConstNumber.VALUE_1,
//     mediaType: uploadType,
//     cropping: enableCrop,
//     maxFiles: count,
//     height: ConstNumber.VALUE_400,
//     width: ConstNumber.VALUE_400,
//     quality: ConstNumber.VALUE_1,
//     includeBase64: true,
//     multiple: isMultiple,
//   };
//   if (isCamera) {
//     AppPermissionsUtils.requestAppPermission({
//       permission: AppPermissions.CAMERA,
//       success: () =>
//         openPicker(isCamera, successCallback, errorCallback, options),
//       error: () => errorCallback?.(),
//       shouldRequest: true,
//     });
//   } else {
//     AppPermissionsUtils.requestAppPermission({
//       permission: AppPermissions.GALLERY,
//       success: () =>
//         openPicker(isCamera, successCallback, errorCallback, options),
//       error: () => errorCallback?.(),
//       shouldRequest: true,
//       mediaType: uploadType,
//     });
//   }
// };
