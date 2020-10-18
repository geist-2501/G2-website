import React from 'react';
import Head from 'next/head';
import NavComponent from '../components/Nav/Nav.component';
import SectionLayout from '../layout/Section/Section.layout';
import Footer from '../components/Footer/Footer.component';
import AboutHero from '../components/AboutHero/AboutHero.component';

export default function About() {
  return (
    <>
      <Head>
        <title>G2 | About</title>
      </Head>
      <NavComponent />
      <SectionLayout>
        <AboutHero />
      </SectionLayout>
      <Footer />
    </>
  );
}
