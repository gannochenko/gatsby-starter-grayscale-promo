import { ReactNode } from 'react';

export interface QueryProps {
    children: (data: any) => ReactNode;
}

export interface ObjectLiteral<P = any> {
    [k: string]: P;
}

export type FontSize = 'large' | 'medium' | 'standard' | 'small';
