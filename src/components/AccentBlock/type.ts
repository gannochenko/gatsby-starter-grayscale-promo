import { FontSize } from '../../type';
import { EffectRun, EffectProps } from '../../lib/effects';

export interface Props {
    html: string;
    fontSize: FontSize;
    runEffect: EffectRun;
    effectProps: EffectProps;
}
