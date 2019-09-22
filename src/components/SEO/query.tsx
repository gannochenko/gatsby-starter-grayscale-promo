import React, { FunctionComponent, ReactNode } from 'react';
import { graphql, StaticQuery } from 'gatsby';

const detailsQuery = graphql`
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

interface QueryProps {
    children: (data: any) => ReactNode;
}

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={detailsQuery} render={data => children(data)} />;
};
