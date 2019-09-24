import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
        </Layout>
    );
};

export default HomePage;
