import React, { useState } from "react";
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
  display: flex;
  justify-content: flex-end;

  ul {
    all: unset;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  li {
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
    font-family: "Rubik", sans-serif;
    color: ${({ theme }) => theme.colors.primaryBrand};
  }

  button {
    display: none;
    color: #fff;
    margin: 0;
    font-size: 1.5rem;
  }

  button.close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 100;
  }

  @media (max-width: 521px) {
    text-align: right;
    ul {
      display: none;
    }

    &[data-active="true"] {
      display: flex;
      button.close {
        display: block;
      }
      ul {
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        display: flex;
        position: fixed;
        flex-direction: column;
        text-align: left;
        justify-content: center;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 2rem;
        background: rgba(0, 0, 0, 0.5);
        font-size: 2rem;
        z-index: 99;
      }
      li {
        margin-bottom: 1rem;
      }
    }
    button.menu {
      display: block;
    }
    button.close {
      display: hidden;
    }
  }
`;

const PrimaryNavigation: React.FC<Navigation> = (props) => {
  const { items = [], className } = props;
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = (): void => {
    setMenuState(!menuState);
  };

  return (
    <PrimaryNavigationStyle className={className} data-active={menuState}>
      <ul>
        {items.map(({ url, alias }) => (
          <li>
            <a href={url}>{alias}</a>
          </li>
        ))}
      </ul>
      <button className="menu" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <button className="close" onClick={toggleMenu}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </PrimaryNavigationStyle>
  );
};

export default PrimaryNavigation;
