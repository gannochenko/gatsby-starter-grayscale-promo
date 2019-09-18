import { graphql } from 'gatsby';

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
