import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import NearMeHero from './Sections/NearMeHero';
import HowTTWorksSection from '../ExplorePage/Sections/HowTTWorksSection';
import OtherServices from './Sections/OtherServices';
import CategoryBar from '../../Shared/CategoryBar/CategoryBar';
import Modal from './DialogueModal/Modal';
import {
  HouseIconSmall,
  ConfettiIconSmall,
  CakeIconSmall,
  FlowerIconSmall,
  AppleIconSmall,
  ThreeDotsIconSmall,
} from '../../Shared/Icon/Icon';
import { pageData } from './page-data';

const iconData = [
  {
    icon: HouseIconSmall,
    to: '/home-improvement',
    categoryTitle: 'Home',
  },
  {
    icon: CakeIconSmall,
    to: '/weddings',
    categoryTitle: 'Weddings',
  },
  {
    icon: ConfettiIconSmall,
    to: '/events',
    categoryTitle: 'Events',
  },

  {
    icon: FlowerIconSmall,
    to: '/wellness',
    categoryTitle: 'Wellness',
  },
  {
    icon: AppleIconSmall,
    to: '/lessons',
    categoryTitle: 'Lessons',
  },
  {
    icon: ThreeDotsIconSmall,
    to: '/more-services',
    categoryTitle: 'More',
  },
];
const BarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  background: rgba(47, 48, 51, 0.7);
`;

const StyledCategoryBar = styled(CategoryBar)`
  max-width: 946px;
  margin: auto;
  height: 55px;
  align-items: center;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  > li {
    padding-left: 15px;
    padding-right: 15px;
  }
  > li > a {
    color: #fff !important;
  }
`;

const implementedServices = [
  'house-cleaning',
  'handyman',
  'personal-training',
  'local-moving',
  'dog-training',
];
class ServiceNearMe extends React.Component {
  state = {
    showModal: false,
    showCancelRequest: false,
    heroInfo: {},
    service: '',
  };

  componentDidMount() {
    const {
      history,
      match: {
        params: { service },
      },
    } = this.props;

    if (!implementedServices.includes(service)) {
      history.push('/service-not-found');
    } else {
      this.setState({ heroInfo: pageData[service], service });
    }
  }

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false, showCancelRequest: false });
  };

  showCancelRequestHandler = () => {
    this.setState({ showCancelRequest: true });
  };

  continueRequestHandler = () => {
    this.setState({ showCancelRequest: false });
  };

  render() {
    const {
      showModal,
      showCancelRequest,
      service,
      heroInfo: { nameSingle, namePlural, imgUrl },
    } = this.state;
    return (
      <Layout>
        {showModal ? (
          <Modal
            service
            whichService={service}
            showCloseRequest={showCancelRequest}
            closeModal={this.closeModalHandler}
            continueRequest={this.continueRequestHandler}
            showCancelRequest={this.showCancelRequestHandler}
          />
        ) : null}
        <BarWrapper>
          <StyledCategoryBar categories={iconData} />
        </BarWrapper>
        <NearMeHero
          nameSingle={nameSingle}
          namePlural={namePlural}
          imgUrl={imgUrl}
          goHandler={this.showModalHandler}
        />
        <HowTTWorksSection />
        <OtherServices />
      </Layout>
    );
  }
}
export default withRouter(ServiceNearMe);
