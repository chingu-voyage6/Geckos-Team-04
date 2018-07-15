import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 48px 0 0 0;
  margin: 10px 0 0 0;
  width: 100%;
`;

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 0 auto;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    display: none;
  }
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
const FooterCol1 = styled.div`
  width: 33.33333%;
`;
const InnerWrap = styled.div`
  text-align: left;
  > ul {
    list-style: none;
    display: flex;
    padding: 0;
    > li {
      margin-right: 1.5rem;
      > a {
        color: #3490dc;
        > svg {
          width: 2rem;
          color: #8795a1;
          fill: currentColor;
          margin-top: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
const FooterCol2 = styled.div`
  width: 66.66667%;
  display: flex;
`;
const Guarantee = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
  color: #8795a1;
`;
const GuaranteeHolder = styled.div`
  margin-right: 0.5rem;
  > img {
    height: 2rem;
  }
`;
const FooterCard = styled.div`
  width: 25%;
  padding-left: 1rem;
  padding-right: 1rem;
  > ul {
    list-style: none;
    color: #8795a1;
    padding: 0;
    margin: 0;
    > li {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;
const FooterLinkHeader = styled.div`
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Footer = props => {
  const { isVisible } = props;
  if (!isVisible) return <div />;

  return (
    <FooterSection>
      <MobileFooter>
        <MobileLinkContainer>
          <MobileLinkElement1>Company</MobileLinkElement1>
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
        <MobileLinkContainer>
          <MobileLinkElement1>Customers</MobileLinkElement1>
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
        <MobileLinkContainer>
          <MobileLinkElement1>Pros</MobileLinkElement1>
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
        <MobileLinkContainer>
          <MobileLinkElement1>Support</MobileLinkElement1>
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
      </MobileFooter>
      <StyledFooter>
        <FooterCol1>
          <svg width="120" height="17" viewBox="0 0 156 21" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M115.67 17.929c-1.403 0-2.089-.873-2.087-1.777 0-1.183.88-1.775 1.99-1.93l3.781-.54v.685c-.001 2.71-1.858 3.562-3.685 3.562zm.76-12.358c4.344 0 7.108 2.157 7.108 6.395v8.613h-3.996l.016-1.702c-.8 1.202-2.517 2.124-4.642 2.123-3.425-.001-5.511-2.214-5.51-4.612 0-2.741 2.121-4.267 4.796-4.64 0 0 4.393-.52 5.017-.605 0-1.809-1.687-2.219-3.368-2.219-1.722 0-3.091.601-4.15 1.31l-1.567-2.727c1.643-1.162 3.802-1.936 6.296-1.936zm-92.81 1.99c1.09-1.449 2.716-1.962 4.39-1.962 3.475 0 5.954 2.308 5.954 5.702v9.306h-4.122v-8.04c0-2.11-1.105-3.272-2.985-3.272-1.769 0-3.237 1.1-3.237 3.303v8.01h-4.123V0h4.123v7.56zM78.18 11.3v9.306h-4.106v-8.04c0-2.11-1.121-3.272-2.985-3.272-1.769 0-3.238 1.1-3.238 3.303v8.01H63.73v-8.04c0-2.112-1.105-3.273-2.985-3.273-1.768 0-3.237 1.1-3.237 3.303v8.01h-4.122V5.991h4.011V7.71c1.09-1.553 2.764-2.112 4.502-2.112 2.21 0 4.027.95 5.053 2.504 1.185-1.855 3.19-2.504 5.196-2.504 3.6 0 6.033 2.308 6.033 5.702zm18.46 1.99c0 4.39-3.191 7.693-7.408 7.693-2.116 0-3.585-.814-4.58-1.99v1.613h-4.027V.015h4.106v7.5c.995-1.146 2.432-1.916 4.485-1.916 4.233 0 7.423 3.304 7.423 7.693zm-12.028 0c0 2.309 1.596 4.028 3.933 4.028 2.432 0 3.948-1.795 3.948-4.027 0-2.233-1.516-4.027-3.948-4.027-2.337 0-3.933 1.72-3.933 4.027zm54.715-4.931l-2.97 2.368c-.93-.95-1.926-1.463-3.268-1.463-2.132 0-3.838 1.599-3.838 4.027 0 2.443 1.69 4.027 3.822 4.027 1.326 0 2.464-.573 3.332-1.478l2.938 2.398c-1.437 1.765-3.586 2.745-6.143 2.745-4.881 0-8.15-3.258-8.15-7.692 0-4.42 3.269-7.693 8.15-7.693 2.557 0 4.72.996 6.127 2.76zm15.828-2.368l-5.544 5.463L156 20.607h-5.015l-4.264-6.617-1.864 1.84v4.777h-4.122V.015h4.122v11.41l5.338-5.433h4.961zM46.632 19.038C45.542 20.486 43.916 21 42.242 21c-3.475 0-5.954-2.307-5.954-5.701V5.992h4.122v8.039c0 2.111 1.105 3.273 2.985 3.273 1.769 0 3.237-1.101 3.237-3.303V5.99h4.122v14.616h-4.122v-1.569zM97.184 5.992h2.243V1.648h4.107v4.344h4.568v3.5h-4.568v6.183c0 1.023.741 1.644 1.553 1.644.855 0 1.967-.514 1.967-.514l1.328 3.131s-1.411 1.032-4.564 1.032c-2.085 0-4.391-1.507-4.391-4.434V9.49h-2.243v-3.5zm-85.924-.4v9.284c0 1.6-.44 3.173-1.277 4.56l-.926 1.532-.925-1.533a8.815 8.815 0 0 1-1.278-4.56V7.56c1.094-1.453 2.727-1.968 4.406-1.968zM0 3.937V0h18.115v3.937H0z"
            />
          </svg>
          <InnerWrap>
            <ul>
              <li>
                <a href="/">
                  <svg
                    viewBox="0 0 24 24"
                    id="thumbprinticon-twitter_24"
                    width="100%"
                    height="100%"
                  >
                    <path d="M19.8 6.6L21 4.2l-1.8 1.2-.4.2c-.7-.8-1.8-1.4-2.9-1.4-2.2 0-3.9 1.4-3.9 3.6 0 .3 0 .9.1 1.1L12 9S4.2 7.8 3.6 4.8c0 0-1.8 3 1.2 5.4 0 0-1.2.6-1.8 0 0 0 0 1.8 3 3.6 0 0-1.2.6-1.8 0 0 0 2.4 2.4 3.6 2.4 0 0 0 1.8-5.4 1.8 0 0 6.8 4.5 13.2-.6 3.2-2.6 4-5.9 4.1-8.4.1-.3.1-.6.1-.9v-.3L21.6 6l-1.8.6z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg
                    viewBox="0 0 24 24"
                    id="thumbprinticon-facebook_24"
                    width="100%"
                    height="100%"
                  >
                    <path d="M13.1 9.6l-.1-2c0-.9.2-1.6 1.6-1.6h2.1V3.2c-.3 0-.9-.2-2.1-.2-2.5 0-4.5 1.7-4.5 4.5l.1 2.1h-3v3h3V21h3v-8.4h3l.6-3h-3.7z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8 10.9v2.4h4c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4S5.6 7.5 8 7.5c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2L8 10.9zM23 10.9h-2v-2h-2v2h-2v2h2v2h2v-2h2" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M17 2H7C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-1.8-5-5-5zm-2 3h3v3h-3V5zm-3 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 2.2-4 4-4zm8 9c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3v-5h2c0 3.3 2.7 6 6 6s6-2.7 6-6h2v5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </InnerWrap>
          <Guarantee>
            <GuaranteeHolder>
              <img
                alt=""
                src="https://static.thumbtackstatic.com/_assets/images/release/components/tt-guarantee-text/images/guarantee-emblem.5e8fc6df5f4e59b25399e0d985138a26.svg"
              />
            </GuaranteeHolder>
            <span>
              Thumbtack Guarantee<br />
              $1M Property Protection
            </span>
          </Guarantee>
        </FooterCol1>
        <FooterCol2>
          <FooterCard>
            <FooterLinkHeader>Company</FooterLinkHeader>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </FooterCard>
          <FooterCard>
            <FooterLinkHeader>Customers</FooterLinkHeader>
            <ul>
              <li>How it works</li>
              <li>Safety</li>
              <li>iPhone App</li>
              <li>Android App</li>
              <li>Services Near Me</li>
              <li>Cost Estimates</li>
              <li>How To Pages</li>
              <li>Thumbtack Guides</li>
            </ul>
          </FooterCard>
          <FooterCard>
            <FooterLinkHeader>Pros</FooterLinkHeader>
            <ul>
              <li>How it works</li>
              <li>Sign up</li>
              <li>Pro center</li>
              <li>Success stories</li>
              <li>Mobile app</li>
            </ul>
          </FooterCard>
          <FooterCard>
            <FooterLinkHeader>Support</FooterLinkHeader>
            <ul>
              <li>Help center</li>
            </ul>
          </FooterCard>
        </FooterCol2>
      </StyledFooter>
    </FooterSection>
  );
};

Footer.defaultProps = {
  isVisible: true,
};

Footer.propTypes = {
  isVisible: PropTypes.bool,
};

export default Footer;
