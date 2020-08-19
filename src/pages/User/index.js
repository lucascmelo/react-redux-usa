import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useRouteMatch, Link } from 'react-router-dom';

import * as ProductActions from '../../store/actions/product';

import { FiChevronsLeft } from 'react-icons/fi';
import { UserInfo } from './styles';
import formatValue from '../../utils/formatValue';

import Header from '../../components/Header';
import Products from '../../components/Products/index';

const User = ({users, products}) => {
  const { params } = useRouteMatch();
  const [user, setUser] = useState(null);
  const [userCost, setUserCost] = useState(0);

  useEffect(() => {
    const paramsUser = Number(params.user);
    const userFiltered = users.filter((u) => u.id === paramsUser);
    const productsByUser = products.filter((user) => user.userId === paramsUser);

    if(productsByUser[0]?.products.length > 0 ) {
      const sumUserCost = productsByUser[0].products.reduce((a, c) => {
        const valA = a.cost ? parseFloat(a.cost): parseFloat(a);
        const valB = parseFloat(c.cost);
        return Number(valA.toFixed(2)) + Number(valB.toFixed(2));
      });
      setUserCost(sumUserCost.cost ? sumUserCost.cost : sumUserCost);
    } else {
      setUserCost(0);
    }

    setUser(userFiltered[0]);

  }, [params.user, products, users]);


  return (
    <>
      <Header />
      {user && (
        <>
          <UserInfo>
            <header>
              <Link to="/">
                <FiChevronsLeft size={16} />
                Go back
              </Link>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
            </header>
            <section>
              <ul>
                <li>
                  <strong>Email:</strong> {user.email}
                </li>
                <li>
                  <strong>CC Number: </strong>
                  {user.cc_number}
                </li>
                <li>
                  <strong>CC type: </strong>
                  {user.cc_type}
                </li>
              </ul>
              <h3>
                {formatValue(userCost)}
                <small>{user.currency}</small>
              </h3>
            </section>
          </UserInfo>
          <Products userId={user.id} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  users: state.user.users,
  products: state.product.products
})

const mapDistachToProps = dispatch => bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDistachToProps)(User);
