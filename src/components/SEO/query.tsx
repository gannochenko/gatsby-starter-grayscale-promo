import React, { FunctionComponent, ReactNode } from 'react';
import { graphql, StaticQuery } from 'gatsby';

export const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

interface SEOQueryProps {
    children: (data: any) => ReactNode;
}

export const SEOQuery: FunctionComponent<SEOQueryProps> = ({ children }) => {
    return <StaticQuery query={detailsQuery} render={data => children(data)} />;
};
