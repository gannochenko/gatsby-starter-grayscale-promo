import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/Layout/index.js';
import SEO from '../components/SEO/index.js';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" keywords={['']} />
            404
        </Layout>
    );
};

export default NotFoundPage;
