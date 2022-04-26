import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import axios from "axios";
import { setUsers } from "./actions";
import UsersList from "./usersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  // myUsers: users
  users,
}));

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

const Homepage = () => {
  const { users } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());
  const fetchUsers = async () => {
    const response = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => console.log("Err: ", err));

    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("users", users);
  return (
    <div>
      <UsersList />
    </div>
  );
};

export default Homepage;
