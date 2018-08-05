import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BannerLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 225px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 35%;
  display: flex;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 8px;
`;

const BannerContent = styled.div`
  padding: 40px;
  max-width: 500px;
`;

const IconWrapper = styled.div`
  height: 28px;
  width: 28px;
  margin-bottom: 20px;
`;
const TextWrapper = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const SeeAllWrapper = styled.div`
  font-size: 12px;
  font-weight: bold;
  > span {
    text-transform: lowercase;
  }
`;
const GetIcon = ({ icon }) => {
  const TagName = icon;

  return <TagName size="28" />;
};

GetIcon.propTypes = {
  icon: PropTypes.func.isRequired,
};

const categoryBanner = ({ imageUrl, icon, to, title, text }) => (
  <BannerLink
    to={to}
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0,0,0,.75) 0%,rgba(255,255,255,0) 100%),url(${imageUrl})`,
    }}
  >
    <BannerContent>
      <IconWrapper>
        <GetIcon icon={icon} />
      </IconWrapper>
      <TextWrapper>{text}</TextWrapper>
      <SeeAllWrapper>
        See all <span>{title}</span>
      </SeeAllWrapper>
    </BannerContent>
  </BannerLink>
);

categoryBanner.propTypes = {
  icon: PropTypes.element.isRequired,
  imageUrl: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default categoryBanner;
