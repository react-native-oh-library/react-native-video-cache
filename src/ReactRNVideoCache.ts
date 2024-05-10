import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    convert: (url: string) => Promise<string>
    convertAsync: (url: string) => Promise<string>
}
export default TurboModuleRegistry.get<Spec>('ReactNativeVideoCache') as Spec | null;