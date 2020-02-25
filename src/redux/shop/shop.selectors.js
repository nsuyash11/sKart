import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
//Object.keys gives array of keys of that object which we iterate over using map to get collections.key and get each collection item into array

export const selectCollection = collectionUrlParams => {
  return createSelector(
    [selectCollections],
    collections => collections[collectionUrlParams]
  );
};
