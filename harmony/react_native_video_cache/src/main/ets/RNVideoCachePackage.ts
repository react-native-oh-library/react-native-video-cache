import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type {
  TurboModule,
  TurboModuleContext,
} from '@rnoh/react-native-openharmony/ts';
import { TM, RNC } from "@rnoh/react-native-openharmony/generated/ts"
import { RNVideoCacheTurboModule } from './RNVideoCacheTurboModule';


class RNVideoCacheTurboModuleFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (this.hasTurboModule(name)) {
      globalThis.uiAbilityContext = this.ctx.uiAbilityContext;
      return new RNVideoCacheTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.ReactNativeVideoCache.NAME;
  }
}

export class RNVideoCachePackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new RNVideoCacheTurboModuleFactory(ctx);
  }
}