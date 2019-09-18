import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { SEOProps } from './props';
import { SEOQuery } from './query';

export const SEO: FunctionComponent<SEOProps> = ({
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title,
}) => {
    return (
        <SEOQuery>
            {data => {
                console.warn('render!');

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
        </SEOQuery>
    );
};
