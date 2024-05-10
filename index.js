import { NativeModules, TurboModuleRegistry } from 'react-native';

const VideoCacheNative = TurboModuleRegistry ? TurboModuleRegistry.get('ReactNativeVideoCache') : NativeModules.VideoCache

export default (url) => {
  if (!global.nativeCallSyncHook) {
    return url
  }
  return VideoCacheNative.convert(url)
};

export const convertAsync = VideoCacheNative.convertAsync;