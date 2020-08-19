import React, {useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from "uuid";

import * as ProductActions from '../../store/actions/product';

import { AiFillCloseCircle } from 'react-icons/ai';

import { Modal } from './styles';

const Form = ({ userId, productId, products, dispatch, toggleModal, saveProduct }) => {

  const [nameField, setNameField] = useState(() => {
    let name = '';
    if (productId) {
      const productsByUser = products.filter(user => user.userId === userId)[0];
      name = productsByUser.products.find(product => product.id === productId);
    }
    return name.name;
  });

  const [costField, setCostField] = useState(() => {
    let cost = '';
    if (productId) {
      const productsByUser = products.filter(user => user.userId === userId)[0];
      cost = productsByUser.products.find(product => product.id === productId);
    }
    return cost.cost;
  });

  function handleSaveProduct(event) {
    event.preventDefault();
    let updateProducts = products;
    const productsByUser = products.filter(user => user.userId === userId);
    const productsUserIndex = products.findIndex(user => user.userId === userId);

    if(productsByUser.length===0) {
      updateProducts.push({
        userId: userId,
        products: [
          {
            id: uuid(),
            name: nameField,
            cost: costField
          }
        ]
      })
    } else {
      const filterProducts = productsByUser[0].products;

      if (filterProducts.find(product => product.id !== productId && product.name === nameField)) {
        alert('Name already registered.');
        return;
      }

      if (productId) {
        const productIndex = filterProducts.findIndex(product => product.id === productId)
        const product = updateProducts[productsUserIndex].products[productIndex];
        product.name = nameField;
        product.cost = costField;
      } else {
        updateProducts[productsUserIndex].products.push({
          id: uuid(),
          name: nameField,
          cost: costField
        })
      }
    }

    localStorage.setItem(
      '@Upstack-Code:products',
      JSON.stringify(updateProducts),
    );

    saveProduct();
    toggleModal();
  }

  return (
    <Modal>
      <form onSubmit={handleSaveProduct}>
        <header>
          <strong>{productId ? 'Edit' : 'Add'} Product</strong>
          <button type="button" onClick={() => toggleModal()}>
            <AiFillCloseCircle />
          </button>
        </header>
        <label htmlFor="name">Product Name</label>
        <input id="name" type="text" defaultValue={nameField} onChange={(e) => setNameField(e.target.value)} />

        <label htmlFor="cost">Cost</label>
        <input id="cost" type="number" step="any" defaultValue={costField}
        onChange={(e) => setCostField(e.target.value)}
        // onKeyDown={(e) => setCostField(e.target.value)}
        />

        <button type="submit">SAVE</button>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state, action) => ({
  products: state.product.products,
  productId: state.product.productId
})

const mapDistachToProps = dispatch => bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDistachToProps)(Form);
