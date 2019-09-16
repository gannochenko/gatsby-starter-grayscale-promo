import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/Layout/index.js';
import Intro from '../components/Intro/index.js';
import Block from '../components/Block/index.js';
import Footer from '../components/Footer/index.js';
import SEO from '../components/SEO/index.js';

import { Central } from '../style/general';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" keywords={['']} />
            <Intro />
            <Central>
                <Block>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </Block>
            </Central>
            <Footer />
        </Layout>
    );
};

export default NotFoundPage;
