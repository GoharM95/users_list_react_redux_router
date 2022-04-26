import { createSelector } from "reselect";

const homepageState = (state) => state.homepage;

export const makeSelectUsers = createSelector(
  homepageState,
  (homepage) => homepage.users
);
