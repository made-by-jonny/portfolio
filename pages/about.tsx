import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <h1>Hello there.</h1>
      <p>
        I am a multidisciplinary designer, spcialising in creating solutions for
        modern
      </p>
      <a href="/about">find out more</a>
      <input defaultValue="yoyoyoyo" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default Index;
