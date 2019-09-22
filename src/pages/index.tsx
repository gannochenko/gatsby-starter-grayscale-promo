import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Header />
        </Layout>
    );
};

export default HomePage;
