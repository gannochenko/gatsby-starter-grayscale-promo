import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';
import { TextBlock } from '../components/TextBlock';

// @ts-ignore
const HomePage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
            <TextBlock>
                Амбар в поселке Подлипово Правдинского района Калининградской
                области радовал глаз туристов и водителей проезжающих авто с XIX
                века и до 2018 года.
            </TextBlock>
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
            }
        }
    }
`;

export default HomePage;
