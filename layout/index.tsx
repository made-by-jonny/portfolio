import React, { ReactNode } from "react";
import Mast from "../components/mast";
import PrimaryFooter from "../components/primaryFooter";

const nav = [
  { alias: "about", url: "/about" },
  { alias: "work", url: "/work" },
  { alias: "blog", url: "/blog" },
  { alias: "contact", url: "/contact" },
];

const social = [
  { alias: "instagram", url: "https://www.instagra.com/madebyjonny" },
  { alias: "twitter", url: "https://www.twitter.com/madebyjonny" },
  { alias: "youtube", url: "https://www.youtube.com/madebyjonny" },
  { alias: "dribbble", url: "https://www.dribbble.com/madebyjonny" },
];

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Mast />
      {children}
      <PrimaryFooter>
        <article>
          <h2>Navigation</h2>
          <ul>
            {nav.map((item) => (
              <li>
                <a href={item.url}>{item.alias}</a>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Follow me</h2>
          <ul>
            {social.map((item) => (
              <li>
                <a href={item.url}>{item.alias}</a>
              </li>
            ))}
          </ul>
        </article>
        <article className="credit" style={{ opacity: 0.7 }}>
          <img src="/images/watermark.png" width={110} />
          <p>All Rights reserved madebyjonny &copy; 2020</p>
        </article>
      </PrimaryFooter>
    </>
  );
};

export default Layout;
