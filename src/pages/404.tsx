import React from 'react';
// import { Link } from "gatsby"

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" keywords={['']} />
            404
        </Layout>
    );
};

export default NotFoundPage;
