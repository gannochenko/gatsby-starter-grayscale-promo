import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
// import { detailsQuery } from './query';
import { SEOProps } from './props';

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

export const SEO: FunctionComponent<SEOProps> = ({
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title,
}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                console.log('render!');

                const metaDescription =
                    description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            // {
                            //   name: `twitter:card`,
                            //   content: `summary`,
                            // },
                            // {
                            //   name: `twitter:creator`,
                            //   content: data.site.siteMetadata.author,
                            // },
                            // {
                            //   name: `twitter:title`,
                            //   content: title,
                            // },
                            // {
                            //   name: `twitter:description`,
                            //   content: metaDescription,
                            // },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `),
                                      }
                                    : [],
                            )
                            .concat(meta)}
                    />
                );
            }}
        />
    );
};
