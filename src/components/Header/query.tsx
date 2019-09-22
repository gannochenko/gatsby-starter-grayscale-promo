import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const query = graphql`
    query HeaderImage {
        backgroundImage: file(relativePath: { eq: "header.jpg" }) {
            childImageSharp {
                sizes(maxWidth: 1240, quality: 80) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
`;

export const Query: FunctionComponent<QueryProps> = ({ children }) => {
    return <StaticQuery query={query} render={data => children(data)} />;
};
