import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';
import { TextBlock } from '../components/TextBlock';

interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

interface Node {
    id: string;
    html: string;
    frontmatter: {
        graphic: Graphics[];
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

const HomePage: FunctionComponent<Props> = ({ data }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
            {nodes.map(node => (
                <TextBlock
                    key={node.id}
                    html={node.html}
                    graphics={node.frontmatter.graphic}
                />
            ))}
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
                    graphic {
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
                }
            }
        }
    }
`;

export default HomePage;
