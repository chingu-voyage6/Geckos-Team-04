import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { socialLinks } from './linkData';

const LogoFullIcon = () => (
  <svg width="100%" height="24" viewBox="0 0 178 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M131.982 20.49c-1.6 0-2.383-.997-2.381-2.03 0-1.353 1.005-2.029 2.27-2.206l4.315-.617v.783c-.001 3.096-2.12 4.07-4.204 4.07zm.868-14.123c4.956 0 8.11 2.465 8.11 7.309v9.843h-4.56l.019-1.946c-.913 1.375-2.872 2.428-5.297 2.427-3.908-.002-6.289-2.53-6.287-5.27.001-3.133 2.42-4.877 5.472-5.303 0 0 5.013-.595 5.725-.692 0-2.068-1.925-2.536-3.843-2.536-1.965 0-3.527.687-4.735 1.497l-1.788-3.117c1.874-1.327 4.338-2.212 7.184-2.212zM26.95 8.64c1.243-1.655 3.099-2.24 5.01-2.24 3.964 0 6.793 2.637 6.793 6.515v10.636h-4.704v-9.188c0-2.413-1.26-3.74-3.406-3.74-2.018 0-3.694 1.258-3.694 3.775v9.153h-4.703V0h4.703v8.64zm62.257 4.275v10.636H84.52v-9.188c0-2.413-1.28-3.74-3.405-3.74-2.019 0-3.695 1.258-3.695 3.775v9.153h-4.703v-9.188c0-2.413-1.261-3.74-3.406-3.74-2.018 0-3.694 1.258-3.694 3.775v9.153h-4.703V6.847h4.577v1.966c1.243-1.776 3.154-2.414 5.136-2.414 2.523 0 4.595 1.086 5.766 2.862 1.352-2.12 3.64-2.862 5.929-2.862 4.108 0 6.884 2.638 6.884 6.516zm21.062 2.276c0 5.016-3.64 8.79-8.452 8.79-2.414 0-4.09-.93-5.225-2.274v1.844h-4.596V.017h4.685V8.59c1.136-1.31 2.776-2.19 5.118-2.19 4.83 0 8.47 3.775 8.47 8.792zm-13.723 0c0 2.637 1.82 4.602 4.487 4.602 2.775 0 4.505-2.051 4.505-4.602 0-2.552-1.73-4.603-4.505-4.603-2.667 0-4.487 1.965-4.487 4.603zm62.43-5.637l-3.387 2.706c-1.063-1.086-2.199-1.672-3.73-1.672-2.433 0-4.379 1.827-4.379 4.603 0 2.792 1.928 4.602 4.36 4.602 1.514 0 2.812-.655 3.803-1.69l3.352 2.742c-1.64 2.017-4.091 3.137-7.01 3.137-5.569 0-9.299-3.723-9.299-8.791 0-5.051 3.73-8.792 9.3-8.792 2.918 0 5.386 1.138 6.99 3.155zm18.061-2.707l-6.326 6.244L178 23.551h-5.722l-4.866-7.563-2.127 2.104v5.459h-4.703V.017h4.703v13.04l6.091-6.21h5.661zM53.209 21.758c-1.244 1.655-3.1 2.241-5.01 2.241-3.964 0-6.794-2.637-6.794-6.516V6.847h4.704v9.188c0 2.413 1.261 3.741 3.406 3.741 2.018 0 3.694-1.258 3.694-3.775V6.847h4.703v16.704H53.21v-1.793zm57.68-14.91h2.56V1.882h4.686v4.964h5.213v4h-5.213v7.067c0 1.17.846 1.879 1.772 1.879.976 0 2.245-.588 2.245-.588l1.515 3.579s-1.61 1.18-5.208 1.18c-2.38 0-5.01-1.723-5.01-5.068v-8.05h-2.56V6.848zM12.85 6.39V17c0 1.829-.503 3.626-1.458 5.21l-1.056 1.753-1.056-1.752A10.087 10.087 0 0 1 7.82 17V8.64c1.248-1.66 3.11-2.249 5.028-2.249zM0 4.5V0h20.67v4.5H0z"
    />
  </svg>
);

const GuaranteeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.96 29.96">
    <g data-name="Layer 1">
      <path
        d="M16.59.47a3 3 0 0 1 4.25 1.14 3 3 0 0 0 2.78 1.61 3 3 0 0 1 3.11 3.11 3 3 0 0 0 1.61 2.78 3 3 0 0 1 1.14 4.25 3 3 0 0 0 0 3.22 3 3 0 0 1-1.14 4.25 3 3 0 0 0-1.61 2.78 3 3 0 0 1-3.11 3.11 3 3 0 0 0-2.78 1.61 3 3 0 0 1-4.25 1.14 3 3 0 0 0-3.22 0 3 3 0 0 1-4.25-1.14 3 3 0 0 0-2.78-1.61 3 3 0 0 1-3.11-3.11 3 3 0 0 0-1.61-2.78 3 3 0 0 1-1.15-4.24 3 3 0 0 0 0-3.22 3 3 0 0 1 1.14-4.25 3 3 0 0 0 1.61-2.79 3 3 0 0 1 3.11-3.11 3 3 0 0 0 2.79-1.61A3 3 0 0 1 13.37.47a3 3 0 0 0 3.22 0z"
        fill="#ffbe00"
      />
      <circle cx="14.98" cy="14.98" r="10.3" fill="#ffe3b6" />
      <path
        d="M14.22 19.51a1.25 1.25 0 0 1-.87-.35L9.6 15.52a1.25 1.25 0 1 1 1.74-1.79l2.76 2.68 4.9-5.5a1.25 1.25 0 1 1 2 1.58L15.19 19a1.25 1.25 0 0 1-.9.46z"
        fill="#009fd9"
      />
    </g>
  </svg>
);

const GetIcon = ({ tag }) => {
  const TagName = tag;
  return <TagName size="24" />;
};

GetIcon.propTypes = {
  tag: PropTypes.func.isRequired,
};
const TTLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;

  > div {
    height: 22px;
    width: 139px;
  }

  @media (min-width: 482px) {
    width: 50%;
    justify-content: flex-start;
  }
  @media (min-width: 1026px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
const SocialWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-bottom: 30px;
  @media (min-width: 482px) {
    width: 50%;
    justify-content: flex-end;
  }
  @media (min-width: 1026px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
const GuaranteeWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #fafafa;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  @media (min-width: 1026px) {
    justify-content: flex-start;
    border-top: 1px solid transparent;
    padding-top: 0;
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  order: 10;
  flex-basis: 100%;
  padding-bottom: 20px;
  @media (min-width: 1026px) {
    flex-basis: 33.33%;
    order: -10;
    align-items: center;
    flex-direction: column;
    padding-top: 63px;
  }
`;

const Guarantee = styled(Link)`
  display: flex;
  width: 200px;
  text-decoration: none;
`;

const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fafafa;
  color: #676d73;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin-right: 5px;
  :hover {
    color: #009fd9;
  }
`;
const MediaIcon = ({ icon, to }) => (
  <IconWrapper to={to}>
    <GetIcon tag={icon} />
  </IconWrapper>
);

MediaIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};
const GuaranteeIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;
const GuaranteeTextWrapper = styled.div``;
const GuaranteeText = styled.div`
  line-height: 16px;
  font-size: 14px;
  color: #676d73;
`;
const FooterLogos = () => (
  <SectionWrapper>
    <TTLogoWrapper>
      <div>
        <LogoFullIcon />
      </div>
    </TTLogoWrapper>
    <SocialWrapper>
      {socialLinks.map(({ icon, to }, i) => <MediaIcon key={`a${i}`} icon={icon} to={to} />)}
    </SocialWrapper>
    <GuaranteeWrapper>
      <Guarantee to="/guarantee">
        <GuaranteeIconWrapper>
          <GuaranteeIcon />
        </GuaranteeIconWrapper>
        <GuaranteeTextWrapper>
          <GuaranteeText>Thumbtact Guarantee</GuaranteeText>
          <GuaranteeText>&#36;1M Property Protection</GuaranteeText>
        </GuaranteeTextWrapper>
      </Guarantee>
    </GuaranteeWrapper>
  </SectionWrapper>
);

export default FooterLogos;
