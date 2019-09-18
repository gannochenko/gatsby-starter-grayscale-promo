import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const hz = (one, two) => {
    console.log(two);
};

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
        </Layout>
    );
};

export default HomePage;
