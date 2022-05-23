import React from 'react';
import Header from '../components/Header'
import AboutBody from '../components/AboutBody'
import Footer from '../components/Footer'
import Head from 'next/head'
const About = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />  
      <title>AOWESOME FOODSTORE: About</title>
      </Head>
      <Header/>
      <AboutBody currentPageName={"About Body"}/>
      <Footer/>  
    </>
  );
};

export default About;