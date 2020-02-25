import React from "react";

import "../directory/directory.styles.scss";

import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors.js";

import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
