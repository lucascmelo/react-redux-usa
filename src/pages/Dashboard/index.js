import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';

import { Title, Form, Users, Error } from './styles';

const Dashboard = ({ users, modalProduct }) => {
  const [userField, setUserField] = useState('');
  const [inputError, setInputError] = useState('');
  const [userFiltered, setUsersFiltered] = useState(users);

  function handleSearchUser(event) {
    event.preventDefault();

    const userFilter = users.filter(
      (user) => user.cc_number.indexOf(userField) > -1,
    );

    setUsersFiltered(userFilter);

    if (userFilter.length) {
      setInputError('');
    } else {
      setInputError('User not found');
    }
  }

  return (
    <>
      <Header />
      <Title>React Developer Recruitment Task</Title>
      <Form hasError={!!inputError} onSubmit={handleSearchUser}>
        <input
          onChange={(e) => setUserField(e.target.value)}
          value={userField}
          type="number"
          placeholder="Search by cc number"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Users>
        {userFiltered.map((user) => (
          <li key={user.id}>
            <p>
              <strong>
                {user.first_name}
                <br />
                {user.last_name}
              </strong>
            </p>
            <p>{user.email}</p>
            <p>
              {user.cc_number}
              <br /> {user.cc_type}
            </p>
            <Link to={`/users/${user.id}`}>DETAILS</Link>
          </li>
        ))}
      </Users>
    </>
  );
};
export default connect(state => ({
  users: state.user.users,
  modalProduct: state.product.modalProduct
}))(Dashboard);
