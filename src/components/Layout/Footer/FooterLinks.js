import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { footerLinks } from './linkData';
import { CarretIcon } from '../../Shared/Icon/Icon';

const SectionWrapper = styled.div`
  display: flex;
  padding: 24px 0;
  flex-basis: 100%;
  flex-wrap: wrap;

  div:last-child {
    border: none;
  }
  @media (min-width: 1026px) {
    flex-basis: 66.66%;
    justify-content: space-between;
  }
`;

const CarretWrapper = styled.div`
  transform: ${({ closed }) => (closed ? 'rotate(90deg)' : 'rotate(-90deg)')};
  width: 28px;
  height: 28px;
  color: #bfbfbf;

  @media only screen and (min-width: 1026px) {
    display: none;
  }
`;

const LinkListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: 20px;
  @media (min-width: 1026px) {
    width: 25%;
    border-bottom: 1px solid transparent;
  }
`;
const ListHeader = styled.div`
  margin-top: 40px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  padding-bottom: 20px;
  > span {
    display: block;
    flex-grow: 1;
  }

  @media (min-width: 1026px) {
    pointer-events: none;
    font-size: 18px;
  }
`;
const ListWindow = styled.div`
  height: ${({ closed }) => (closed ? 'auto;' : '0;')};
  overflow: hidden;
  @media (min-width: 1026px) {
    height: auto;
  }
`;
const LinkList = styled.div``;
const LinkItem = styled(Link)`
  display: block;
  font-size: 16px;
  text-decoration: none;
  color: #676d73;
  padding: 10px 0;

  @media (min-width: 1026px) {
    font-size: 14px;
    padding: 4px 0;
  }
`;
class FooterLinks extends React.Component {
  state = {
    drawerOpen: {
      Company: false,
      Customers: false,
      Pros: false,
      Support: false,
    },
  };

  drawerHandler = key => {
    const { drawerOpen } = this.state;
    const currentDrawerOpen = drawerOpen[key];
    const updatedDrawer = Object.keys(drawerOpen).reduce((acc, drawer) => {
      acc[drawer] = false;
      return acc;
    }, {});
    updatedDrawer[key] = !currentDrawerOpen;

    this.setState({ drawerOpen: updatedDrawer });
  };

  render() {
    const { drawerOpen } = this.state;
    return (
      <SectionWrapper>
        {Object.keys(footerLinks).map(key => (
          <LinkListWrapper key={key}>
            <ListHeader onClick={() => this.drawerHandler(key)}>
              <span>{key}</span>
              <CarretWrapper closed={drawerOpen[key]}>
                <CarretIcon size="28" />
              </CarretWrapper>
            </ListHeader>
            <ListWindow closed={drawerOpen[key]}>
              <LinkList>
                {footerLinks[key].map(({ linkName, to }) => (
                  <LinkItem key={linkName} to={to}>
                    {linkName}
                  </LinkItem>
                ))}
              </LinkList>
            </ListWindow>
          </LinkListWrapper>
        ))}
      </SectionWrapper>
    );
  }
}

export default FooterLinks;
