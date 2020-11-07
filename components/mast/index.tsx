import React from "react";
import styled from "styled-components";
import PrimaryNavigation from "../primaryNav";
import Image from "next/image";

const MastStyle: React.FC = styled.header`
  position: absolute;
  padding: 2rem 10%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  .branding-area,
  .navigation {
    flex: 1;
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
        <Image src="/images/watermark.png" width={120} height={47} />
      </div>
      <PrimaryNavigation items={items} className="navigation" />
    </MastStyle>
  );
};

export default Mast;
