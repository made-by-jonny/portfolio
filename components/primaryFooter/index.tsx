import React from "react";
import styled from "styled-components";

interface Footer {
  className?: string | (() => string);
}

const PrimaryFooterStyle: React.FC<{
  className?: string | (() => string);
}> = styled.footer`
  display: flex;
  margin-top: 5rem;
  padding-bottom: 3rem;
  ul {
    all: unset;
    list-style: none;
    text-transform: uppercase;
  }

  > article {
    flex: 1;
  }

  h2 {
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
  }

  li {
    margin-right: ${({ theme }) => theme.components.spacing};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    > article {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

const PrimaryFooter: React.FC<Footer> = (props) => {
  const { className, children } = props;
  return (
    <PrimaryFooterStyle className={className}>{children}</PrimaryFooterStyle>
  );
};

export default PrimaryFooter;
