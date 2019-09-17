import React from 'react';

import Layout from '../components/Layout/index.js';
import SEO from '../components/SEO/index.js';

import { foo } from './la';

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            1111 {foo}
        </Layout>
    );
};

export default HomePage;
