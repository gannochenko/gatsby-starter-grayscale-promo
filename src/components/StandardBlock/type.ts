import { FontSize } from '../../type';
import { EffectProperties } from '../../lib/effects';

export interface Props {
    html: string;
    fontSize: FontSize;
    graphics: {
        image: any;
        source?: string;
        sourceText?: string;
        author?: string;
    }[];
    effectProps: EffectProperties;
}
