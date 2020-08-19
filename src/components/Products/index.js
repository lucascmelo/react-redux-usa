import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { Container, Actions, RemoveBtn } from './styles';
import * as ProductActions from '../../store/actions/product';

import formatValue from '../../utils/formatValue';
import Form from './form.js';


const Products = ({ userId, products, modalProduct, dispatch, toggleModal, saveProduct }) => {
  const productsByUser = products.filter(user => user.userId === userId);
  const productsGrid = productsByUser.length>0 ? productsByUser[0].products : [];

  function handleRemoveProduct(id, name) {
    if(window.confirm(`Do you really want delete the product: ${name.toUpperCase()}?`)) {
      let updateProducts = products;
      const productsByUser = products.filter(user => user.userId === userId);
      const productsUserIndex = products.findIndex(user => user.userId === userId);

      const filterProducts = productsByUser[0].products;
      const productIndex = filterProducts.findIndex(product => product.id === id);
      updateProducts[productsUserIndex].products.splice(productIndex, 1);
      localStorage.setItem(
        '@Upstack-Code:products',
        JSON.stringify(updateProducts),
      );
      saveProduct();
    }
  }

  return (
    <>
      <Container>
        <header>
          <h4>Products</h4>
          <button type="button" onClick={() => toggleModal()}>
            Add
          </button>
        </header>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {productsGrid.length>0 ? productsGrid.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{formatValue(product.cost)}</td>
                <Actions>
                  <button type="button" onClick={() => toggleModal(product.id)}>
                    Edit
                  </button>
                  <RemoveBtn type="button" onClick={(e) => handleRemoveProduct(product.id, product.name)}>Remove</RemoveBtn>
                </Actions>
              </tr>
            )) : (
              <tr>
                <td colSpan="3">Products not found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
      {modalProduct && (
        <Form userId={userId} />
      )}

    </>
  );
};

const mapStateToProps = state => ({
  products: state.product.products,
  modalProduct: state.product.modalProduct
})

const mapDistachToProps = dispatch => bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDistachToProps)(Products);
