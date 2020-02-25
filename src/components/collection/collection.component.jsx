import React from "react";

import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import CollectionItem from "../collection-item/collection-item.component.jsx";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">COLLECTION CATEGORY - {title.toUpperCase()}</h2>
      <div className="items">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
//ownprops comes are props passed to this component

export default connect(mapStateToProps)(Collection);
