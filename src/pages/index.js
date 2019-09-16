import React from 'react';

import Layout from '../components/Layout/index.js';
import Intro from '../components/Intro/index.js';
import Block from '../components/Block/index.js';
import Skills from '../components/Skills/index.js';
import Footer from '../components/Footer/index.js';
import SEO from '../components/SEO/index.js';

import { So, Explanation, ButtonLink, Title2, Central } from '../style/general';

const HomePage = () => {
    return (
        <Layout>
            <SEO title="Welcome!" keywords={['']} />
            <Intro />
            <Central>
                <Block>
                    <So>So,</So>
                    <p className="">
                        My name is Sergei. I am a passionate learner, hard
                        worker, somewhat perfectionist, in deep love with
                        JavaScript. Have masters in math. In IT since 2004. I
                        like solving puzzles, producing good quality code,
                        bringing outstanding ideas into the real world,
                        discussing problems and working in a team.
                    </p>
                </Block>
                <Block>
                    <Title2>Blog</Title2>
                    <Explanation>
                        To be honest, I am not much of a story teller.
                        <br />
                        Sometimes I write stories and publish it somewhere.
                    </Explanation>
                    <Skills main />
                    <ButtonLink to="/skills">View all stories</ButtonLink>
                </Block>
                <Block>
                    <Title2>Technical skills</Title2>
                    <Explanation>
                        I am more a front-end engineer, than somebody else, so I
                        used to think I am good at
                    </Explanation>
                    <Skills main />
                    <ButtonLink to="/skills">View all skills</ButtonLink>
                </Block>
                <Block>
                    <Title2>Personal projects</Title2>
                    <Explanation>
                        I maintain several projects of my own. One man army!
                    </Explanation>
                    <Skills main />
                    <ButtonLink to="/skills">View all projects</ButtonLink>
                </Block>
            </Central>
            <Footer />
        </Layout>
    );
};

export default HomePage;
