import { ReactNode } from 'react';

export interface QueryProps {
    children: (data: any) => ReactNode;
}
