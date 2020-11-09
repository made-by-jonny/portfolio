import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import React from "react";
import styled from "styled-components";

const Page: React.FC = styled.div`
  padding-top: 10rem;
  h1 {
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    margin: 0 0 8rem 0;
    font-weight: 900;
    line-height: 130%;
    text-align: left;
    text-align: center;
    span {
      display: block;
      font-size: 2rem;
    }
  }
  @media (max-width: 525px) {
    h1 {
      font-size: 3rem;
      margin: 0 0 2rem 0;
      text-align: left;
    }
  }
`;

const Intro: React.FC = styled.div`
  padding-top: 4rem;
  div {
    column-count: 2;
    column-gap: 2rem;
  }
`;

const AboutContainer: React.FC = styled.article`
  display: flex;
  margin-bottom: 2rem;
  > header,
  > ul,
  > div {
    flex: 1;
  }
  > header {
    top: 2rem;
    align-self: flex-start;
    position: sticky;
    min-width: 35%;
    max-width: 35%;
    margin-right: 3rem;
  }
  > ul {
    all: unset;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    > li {
      flex: 1;
      margin-bottom: 3rem;
      min-width: 50%;
    }
  }

  p:first-child {
    margin-top: 0;
  }

  h3,
  h2,
  h1 {
    margin: 0 0 1rem 0;
    font-weight: 400;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  @media (max-width: 789px) {
    > ul {
      > li {
        min-width: 100%;
      }
    }
  }
  @media (max-width: 525px) {
    flex-direction: column;
    > ul {
      > li {
        min-width: 45%;
      }
    }
    > header {
      top: 2rem;
      position: relative;
      min-width: 100%;
      max-width: 100%;
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 525px) {
    flex-direction: column;
    > ul {
      > li {
        min-width: 100%;
      }
    }
  }
`;

const Index: React.FC = () => {
  return (
    <Page>
      <h1>
        My name is Jonathan Hamilton, a designer who can code
        <span>(amongst other things)</span>
      </h1>
      <AboutContainer>
        <header>
          <h2>A little about me</h2>
        </header>
        <div>
          <p>
            I have always rooted for the underdog, I believe this is partly
            because of my background of art and design, at school I was always
            mocked for taking "dossing" (easy or lazy for you non-british
            people) subjects, but since I was about 8-9 years old I knew I
            wasnted to be a designer. However as the web became a thing I taught
            myself to code. So by the time I had finished university (with a 1st
            class honors in interactive media design) I had quite a unique
            skillset of visual design, UX design as well as being a competent
            full stack developer.
          </p>
          <p>
            While I do work full time for another company, I try to help out
            smaller businesses who don't have the budget to work with an agency,
            or have the resources to pay multiple people to create content for
            them. Having a consistent flow of content is vital to marketing, as
            modern social platforms reward this, so developing a brand identity
            or website isn't enough. This is where I come in, as I can lay the
            foundations but also enhance that with content creation.
          </p>
        </div>
      </AboutContainer>

      <AboutContainer>
        <header>
          <h2>What I can provide</h2>
        </header>
        <ul>
          <li>
            <h3>Development</h3>
            <ul>
              <li>Websites</li>
              <li>Native Apps</li>
              <li>Progressive Web Apps</li>
            </ul>
          </li>
          <li>
            <h3>Design</h3>
            <ul>
              <li>Visual Design</li>
              <li>UX Design</li>
              <li>User Research &amp; Testing</li>
            </ul>
          </li>
          <li>
            <h3>Content</h3>
            <ul>
              <li>Photography</li>
              <li>Videography</li>
              <li>Video editing</li>
            </ul>
          </li>
          <li>
            <h3>Consultancy</h3>
            <p>
              I will avalible to chat about these topics and how they effect our
              company
            </p>
          </li>
        </ul>
      </AboutContainer>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 1,
  };
};

export default Index;
