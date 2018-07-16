import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../Layout/Layout';
import CategoryHero from './Sections/CategoryHero';
import CategoryPopular from './Sections/CategoryPopular';
import catData from './categoriesData/index';
import CategoryServices from './Sections/CategoryServices';
// https://source.unsplash.com/random
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: catData[props.match.path],
    };
  }

  render() {
    const { pageData } = this.state;
    const { heroImgUrl, pageTitle, pageSlogan, popularServices, subcategories } = pageData;
    return (
      <Layout>
        <CategoryHero imgUrl={heroImgUrl} title={pageTitle} slogan={pageSlogan} />
        <CategoryPopular services={popularServices} sectionTitle={pageTitle} />
        <CategoryServices subcategories={subcategories} sectionTitle={pageTitle} />
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
