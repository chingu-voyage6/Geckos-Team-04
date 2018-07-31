import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../Section/Section';

const StyledSection = styled(Section)`
  > div {
    @media (min-width: 482px) {
      max-width: 449px;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: 701px) {
      max-width: 668px;
    }

    @media (min-width: 1026px) {
      max-width: 946px;
    }
  }
`;
const CopyWrap = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fafafa;
  font-size: 14px;
  color: #676d73;
  box-sizing: inherit;
`;

const CopySnap = styled.div`
  width: 100%;
`;

const CopyLegal = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CopyRightBox = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  white-space: nowrap;
`;

const HelpDocs = styled.div`
  display: flex;
  list-style: none;
`;

const CopyDocs = HelpDocs.extend`
  display: flex;
  list-style: none;

  > li:first-child {
    margin-right: 8px;
  }

  > li:first-child:after {
    padding-left: 8px;
    content: '|';
    box-sizing: inherit;
  }
`;

const CopyRightFooter = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  box-sizing: inherit;
  background: #fafafa;

  text-align: left;
`;

const CopyAnchor = styled.a`
  fill: ${({ fill }) => fill || '#676d73'};
  color: ${({ fill }) => fill || '#676d73'};
  text-decoration: none;
  cursor: pointer;
`;

const DefaultCopyBox = () => (
  <CopyLegal>
    <CopyRightBox>&copy; 2018 Thumbtack, Inc.</CopyRightBox>
    <CopyDocs>
      <li>
        <CopyAnchor href="/privacy">Privacy Policy</CopyAnchor>
      </li>
      <li>
        <CopyAnchor href="/terms">Terms of Use</CopyAnchor>
      </li>
    </CopyDocs>
  </CopyLegal>
);
const StyledLegal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    text-align: center;
    > li {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;

    div:first-child {
      text-align: left;
    }
  }
`;

const HelpBox = () => (
  <StyledLegal>
    <CopyRightBox>&copy; 2018 Thumbtack, Inc. All Rights Reserved</CopyRightBox>
    <HelpDocs>
      <li>
        Questions?
        <CopyAnchor href="https://help.thumbtack.com" fill="#009fd9">
          Help Center
        </CopyAnchor>
      </li>
    </HelpDocs>
  </StyledLegal>
);

export const CopyRight = props => {
  const { defaultCopyright } = props;

  return (
    <StyledSection isGray hasBorder padding={false}>
      <CopyRightFooter>
        <CopyWrap>
          <CopySnap>{defaultCopyright ? <DefaultCopyBox /> : <HelpBox />}</CopySnap>
        </CopyWrap>
      </CopyRightFooter>
    </StyledSection>
  );
};

CopyRight.propTypes = {
  defaultCopyright: PropTypes.bool,
};

CopyRight.defaultProps = {
  defaultCopyright: true,
};

export default CopyRight;
