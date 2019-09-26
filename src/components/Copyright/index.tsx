import React, { FunctionComponent } from 'react';

import { CopyrightContainer } from './style';
import { Props } from './type';

export const Copyright: FunctionComponent<Props> = ({ children }) => {
    return <CopyrightContainer>{children}</CopyrightContainer>;
};
