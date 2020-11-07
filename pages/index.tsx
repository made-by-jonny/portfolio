import React from "react";

const Index: React.FC = () => {
  return <h1>hello</h1>;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}

export default Index;
