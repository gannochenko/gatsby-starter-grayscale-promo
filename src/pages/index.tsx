import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';
import { TextBlock } from '../components/TextBlock';

export interface Node {
    id: string;
    html: string;
}

export interface Data {
    allMarkdownRemark: {
        nodes: Node[];
    };
}

export interface Props {
    data: Data;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
            {nodes.map(node => (
                <TextBlock key={node.id} html={node.html} />
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
            }
        }
    }
`;

export default HomePage;
