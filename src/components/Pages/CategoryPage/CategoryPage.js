import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../Layout/Layout';
import CategoryHero from './Sections/CategoryHero';
import CategoryPopular from './Sections/CategoryPopular';
import catData from './categoriesData';
import CategoryServices from './Sections/CategoryServices';

import PillBar from './Sections/PillBar';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: catData[props.match.path],
    };
  }

  render() {
    const { pageData } = this.state;
    const { heroImgUrl, pageTitle, pageSlogan, subcategories } = pageData;
    return (
      <Layout>
        <CategoryHero imgUrl={heroImgUrl} title={pageTitle} slogan={pageSlogan} />
        <PillBar />
        <CategoryPopular sectionTitle={pageTitle} />
        {pageTitle !== 'Weddings' && (
          <CategoryServices subcategories={subcategories} sectionTitle={pageTitle} />
        )}
      </Layout>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default CategoryPage;
