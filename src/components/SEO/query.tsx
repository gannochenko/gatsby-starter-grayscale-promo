import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

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

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={detailsQuery} render={data => children(data)} />;
};
