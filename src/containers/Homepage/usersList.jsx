import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import styled from "styled-components";
import useNavigate from "react-router-dom";

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.h3`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));
const UsersList = (props) => {
  const { users } = useSelector(stateSelector);

  const isEmptyUsers = !users || (users && users.length === 0);

  // ???????
  const navigate = useNavigate();

  const goToUserPage = (id) => {
    navigate(`/user/${id}`);
  };

  if (isEmptyUsers) {
    return null;
  }

  return (
    <UsersContainers>
      {users.map((user, index) => (
        <UserWrapper key={index} onClick={() => goToUserPage(user.ids)}>
          <UserImage>
            <img src={user.avatar} />
            <UserName>
              {user.first_name}
              {user.last_name}
            </UserName>
          </UserImage>
        </UserWrapper>
      ))}
    </UsersContainers>
  );
};

export default UsersList;
