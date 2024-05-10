import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"
import { HttpProxyCacheServer } from '@ohos/video-cache'

export class RNVideoCacheTurboModule extends TurboModule implements TM.ReactNativeVideoCache.Spec {
  private reactContext;
  private proxy: HttpProxyCacheServer;

  constructor(ctx) {
    super(ctx);
    this.reactContext = ctx;
  }

  public convert(url: string): Promise<string> {
    if (this.proxy == null) {
      this.proxy = new HttpProxyCacheServer(this.reactContext);
    }
    return this.proxy.getProxyUrl(url);
  }

  public convertAsync(url: string): Promise<string> {
    if (this.proxy == null) {
      this.proxy = new HttpProxyCacheServer(this.reactContext);
    }
    return Promise.resolve(this.proxy.getProxyUrl(url));
  }
}