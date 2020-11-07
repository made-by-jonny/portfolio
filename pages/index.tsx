import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";

const HeroSection: React.FC = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5rem;
  h1 {
    margin-top: 0;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
  }
  article {
    width: 60%;
  }
  div {
    display: flex;
    flex: 0.3;
    min-width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    font-size: 2rem;
  }
`;

const WorkSection: React.FC = styled.article`
  ul {
    all: unset;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    flex-wrap: wrap;
    h3 {
      margin: 0;
    }
    img {
      all: unset;
      transition: transform 0.5s;
      background: #1f1d20;
      width: 100%;
      height: 400px;
      &:hover {
        transform: scale(0.98, 0.98);
      }
    }
  }
`;

const BlogSection: React.FC = styled.article`
  ul {
    all: unset;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    li {
      flex: 1 0 47%;
    }
    h3 {
      margin: 0;
    }
    img {
      background: red;
      width: 100%;
      height: 400px;
    }
  }
`;

const Index: React.FC = () => {
  return (
    <>
      <HeroSection>
        <article>
          <h1>Hello There!</h1>
          <p>
            My name is Jonathan Hamilton, and I am a interdisciplinary designer,
            based in the North East of England working remotely.
          </p>
        </article>
        <div>
          <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
        </div>
      </HeroSection>
      <WorkSection>
        <h2>Selecton of my work</h2>
        <ul>
          {[{}, {}, {}, {}].map((item) => (
            <li>
              <img src="" />
              <h3>work name</h3>
            </li>
          ))}
        </ul>
      </WorkSection>

      <BlogSection>
        <ul>
          {[{}, {}, {}, {}].map((item) => (
            <li>
              <img src="" />
              <h3>work name</h3>
            </li>
          ))}
        </ul>
      </BlogSection>
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
