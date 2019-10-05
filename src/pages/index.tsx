import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

import { StandardBlock } from '../components/StandardBlock';
import { AccentBlock } from '../components/AccentBlock';
import { FontSize } from '../type';

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
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
            {nodes.map(node => {
                const Widget = getWidget(node);
                return (
                    <Widget
                        key={node.id}
                        html={node.html}
                        fontSize={node.frontmatter.fontSize}
                        graphics={node.frontmatter.graphics}
                    />
                );
            })}
            {/*<AccentBlock*/}
            {/*    fontSize="small"*/}
            {/*    html={*/}
            {/*        '<p>На данный момент у нас собрано около 40% средств, однако этого недостаточно. Мы будем очень рады вашим пожертвованиям.</p>'*/}
            {/*    }*/}
            {/*/>*/}
            {/*<AccentBlock*/}
            {/*    fontSize="standard"*/}
            {/*    html={*/}
            {/*        '<p>На данный момент у нас собрано около 40% средств, однако этого недостаточно. Мы будем очень рады вашим пожертвованиям.</p>'*/}
            {/*    }*/}
            {/*/>*/}
            {/*<AccentBlock*/}
            {/*    fontSize="medium"*/}
            {/*    html={*/}
            {/*        '<p>На данный момент у нас собрано около 40% средств, однако этого недостаточно. Мы будем очень рады вашим пожертвованиям.</p>'*/}
            {/*    }*/}
            {/*/>*/}
            {/*<AccentBlock*/}
            {/*    fontSize="large"*/}
            {/*    html={*/}
            {/*        '<p>На данный момент у нас собрано около 40% средств, однако этого недостаточно. Мы будем очень рады вашим пожертвованиям.</p>'*/}
            {/*    }*/}
            {/*/>*/}
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
                }
            }
        }
    }
`;

export default HomePage;
