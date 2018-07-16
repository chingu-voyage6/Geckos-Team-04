import React from 'react';
import styled from 'styled-components';

const MobileLinkContainer = styled.div`
  border-bottom: 1px solid #dae1e7;
  display: flex;
`;
const MobileLinkElement1 = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 2rem;
  width: 90%;
  flex-grow: 1;
`;
const MobileLinkElement2 = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 10%;
  flex-grow: 1;
  text-align: right;
`;
const MobileFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  display: none;
  @media (max-width: 700px) {
    display: initial;
  }
`;


const footerMenuLinks = [
  {
    link: 'Company',
    childrenLink: [
      {
        linkName: 'About',
        to: '/about',
      },
      {
        linkName: 'Career',
        to: '/career',
      },
      {
        linkName: 'Press',
        to: '/press',
      },
      {
        linkName: 'Blog',
        to: '/blog',
      },
    ],
  },
  {
    link: 'Customers',
    childrenLink: [
      { linkName: 'How it works', to: '/how' },
      { linkName: 'Safety', to: '/safety' },
      { linkName: 'iPhone App', to: '/iphone' },
      { linkName: 'Android App', to: '/andriod' },
      { linkName: 'Services Near Me', to: '/nearby' },
      { linkName: 'Cost Estimates', to: '/estimate' },
      { linkName: 'How to pages', to: '/sitemap' },
      { linkName: 'Thumbtack guides', to: '/guides' },
    ],
  },
  {
    link: 'Pros',
    childrenLink: [{ linkName: 'Join as a Pro', to: '/pro' }],
  },
  {
    link: 'Support',
    childrenLink: [{ linkName: 'Sign Up', to: '/signup' }],
  },
];
class MobileFooterInner extends React.Component {
  render() {
    return (
      <div>
        <MobileFooter>
          {footerMenuLinks.map(({ link, childrenLink }) => (
            <MobileLinkContainer>
              <MobileLinkElement1 key={link}>{link}</MobileLinkElement1>
              <MobileLinkElement2>
                <svg width="16" height="9" viewBox="0 0 16 9">
                  <path
                    d="M8.008 9a.497.497 0 0 1-.36-.157L.138.862a.515.515 0 0 1 .015-.72.493.493 0 0 1 .707.015l7.147 7.596 7.13-7.596a.494.494 0 0 1 .707-.016c.2.196.207.518.016.721L8.37 8.843A.495.495 0 0 1 8.01 9z"
                    fill="#979797"
                    fillRule="evenodd"
                  />
                </svg>
              </MobileLinkElement2>
            </MobileLinkContainer>
          ))}
        </MobileFooter>
      </div>
    );
  }
}

export default MobileFooterInner;
