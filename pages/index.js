import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Pups from '../components/Pups';

const Home = () =>
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="Description"
        content="AuzzieRun of North Carolina for the families that adopted from AuzzieRun"
      />
      <title>AuzzieRun Family</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />

    <div>
    <h3 style={{textAlign: 'center'}}>All the pups</h3>
    <Pups/>
  </div>
  <style jsx>{`
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #1F2023;
      color: #e4e4e4;
    }
    a {
      color: #e39777;
    }
    img {
      filter: grayscale(30%);
    }
    svg {
      filter: grayscale(30%);
    }
  }
  `}</style>
  </div>

export default Home;