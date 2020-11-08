import React from "react";
import styled from "styled-components";
import PrimaryNavigation from "../primaryNav";
import Image from "next/image";

const MastStyle: React.FC = styled.header`
  position: absolute;
  padding: 2rem 14.7%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  .branding-area,
  .navigation {
    flex: 1;
  }

  @media (max-width: 946px) {
    padding: 2rem 9.7%;
  }

  @media (max-width: 666px) {
    padding: 2rem 5%;
  }
`;

const items = [
  { alias: "about", url: "/about" },
  { alias: "work", url: "/work" },
  { alias: "blog", url: "/blog" },
  { alias: "contact", url: "/contact" },
];

const Mast: React.FC = ({ children }) => {
  return (
    <MastStyle>
      <div className="branding-area">
        <img src="/images/watermark.png" width="120px" />
      </div>
      <PrimaryNavigation items={items} className="navigation" />
    </MastStyle>
  );
};

export default Mast;
