import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

import { StandardBlock } from '../components/StandardBlock';
import { AccentBlock } from '../components/AccentBlock';
import { FontSize } from '../type';
import { EffectsSupported } from '../lib/effects';

interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

interface Node {
    id: string;
    html: string;
    frontmatter: {
        graphics: Graphics[];
        widget: 'StandardBlock' | 'AccentBlock' | 'QuoteBlock';
        fontSize: FontSize;
        effect?: EffectsSupported;
        effectTimeout?: number;
    };
}

interface Data {
    allMarkdownRemark: {
        nodes: Node[];
    };
}

interface Props {
    data: Data;
}

const getWidget = (node: Node) => {
    const { frontmatter: { widget = '' } = {} } = node;
    if (widget === 'AccentBlock') {
        return AccentBlock;
    }

    return StandardBlock;
};

const HomePage: FunctionComponent<Props> = ({ data }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;
    return (
        <Layout>
            <SEO title="Home" keywords={['']} />
            <Intro />
            {nodes.map(node => {
                const Widget = getWidget(node);
                return (
                    // @ts-ignore
                    <Widget
                        key={node.id}
                        html={node.html}
                        {...node.frontmatter}
                    />
                );
            })}
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
            nodes {
                id
                html
                frontmatter {
                    graphics {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1240, quality: 80) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                        author
                        source
                    }
                    widget
                    fontSize
                    effect
                    effectTimeout
                }
            }
        }
    }
`;

export default HomePage;
