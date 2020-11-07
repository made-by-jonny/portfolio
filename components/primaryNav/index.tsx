import React from "react";
import styled from "styled-components";

interface NavItem {
  alias: string;
  url: string;
}

interface Navigation {
  items: Array<NavItem>;
  className?: string | (() => string);
}

const PrimaryNavigationStyle: React.FC<{
  className?: string | (() => string);
}> = styled.nav`
  ul {
    all: unset;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  li {
    margin-right: ${({ theme }) => theme.components.spacing};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
  }
`;

const PrimaryNavigation: React.FC<Navigation> = (props) => {
  const { items = [], className } = props;
  return (
    <PrimaryNavigationStyle className={className}>
      <ul>
        {items.map(({ url, alias }) => (
          <li>
            <a href={url}>{alias}</a>
          </li>
        ))}
      </ul>
    </PrimaryNavigationStyle>
  );
};

export default PrimaryNavigation;
