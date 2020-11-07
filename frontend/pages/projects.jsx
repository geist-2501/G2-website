import Head from 'next/head';
import React from 'react';
import NavComponent from '../components/Nav/Nav.component';
import Footer from '../components/Footer/Footer.component';
import SectionLayout from '../layout/Section/Section.layout';

export default function Projects()
{
  return (
    <>
      <Head>
        <title>G2 | Projects</title>
      </Head>
      <NavComponent />
      <SectionLayout>
        <h1>Projects</h1>
      </SectionLayout>
      <Footer />
    </>
  );
}
