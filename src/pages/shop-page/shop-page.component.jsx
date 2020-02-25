import React from "react";

import "./shop-page.styles.scss";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component.jsx";
import { Route, withRouter } from "react-router-dom";

const ShopPage = ({ match, history }) => {
  return (
    <div className="collection-page">
      <h1 onClick={() => history.push(`${match.url}`)}>SHOP GALLERY</h1>

      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

// const mapStateToProps = state => ({
//   collections: selectCollections(state)
// });

export default withRouter(ShopPage);
