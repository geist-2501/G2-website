import React from 'react';
import Head from 'next/head';
import SectionLayout from '../layout/section/section.layout';
import NavComponent from '../components/Nav/Nav.component';
import Footer from '../components/Footer/Footer.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavComponent />
      <SectionLayout>
        <h1>Home</h1>
      </SectionLayout>
      <Footer />
    </>
  );
}
