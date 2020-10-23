import React from 'react';
import Head from 'next/head';
import SectionLayout from '../layout/Section/Section.layout';
import NavComponent from '../components/Nav/Nav.component';
import Footer from '../components/Footer/Footer.component';
import HeroBanner from '../components/HeroBanner/HeroBanner.component';
import DotWaveEffect from '../components/DotWaveEffect/DotWaveEffect.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <DotWaveEffect>
        <NavComponent />
        <SectionLayout>
          <HeroBanner />
        </SectionLayout>
        <Footer />
      </DotWaveEffect>
    </>
  );
}
