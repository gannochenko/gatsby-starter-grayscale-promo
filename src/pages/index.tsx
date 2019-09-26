import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';
import { TextBlock } from '../components/TextBlock';

const HomePage = () => {
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

export default HomePage;
