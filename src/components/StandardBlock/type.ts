import { FontSize } from '../../type';

export interface Props {
    html: string;
    fontSize: FontSize;
    graphics: {
        image: any;
        source?: string;
        author?: string;
    }[];
}
