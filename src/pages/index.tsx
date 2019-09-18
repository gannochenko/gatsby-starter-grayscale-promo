import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
        </Layout>
    );
};

export default HomePage;
