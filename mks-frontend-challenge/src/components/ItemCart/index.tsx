import React from 'react';
import { ItemCartStyle, ItemCartButton, ItemCartPrice, ItemCartQuantity, ContainerQuantity } from './style';
import { IItemCart } from '../../interfaces/IItemCart';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from '../../interfaces/IProduct';
import { addMoreProduct, removeProduct } from '../../store/Stock.store';

export function ItemCart({ id, name, photo, quantity, price }: IItemCart) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addProduct = () => {
    const allProductsSelected: IProduct[] = cart.productsSelected;
    const addProductExtra = allProductsSelected.map(product => {
      if (product.id === id) {
        const increment = { ...product, quantity: Number(product.quantity) + 1 };

        return increment;
      }
      return product;
    });

    return dispatch(addMoreProduct(addProductExtra));
  };

  const removeItem = () => {
    const allProductsSelected: IProduct[] = cart.productsSelected;
    const removeProducts = allProductsSelected.map(product => {
      if (product.id === id && Number(product.quantity) > 0) {
        const decrement = { ...product, quantity: Number(product.quantity) - 1 };

        return decrement;
      }
      return product;
    });

    return dispatch(removeProduct(removeProducts));
  };

  const removeProductCart = () => {
    const allProductsSelected: IProduct[] = cart.productsSelected;
    const removeProducts = allProductsSelected.filter(product => product.id !== id);

    return dispatch(removeProduct(removeProducts));
  };

  return (
    <ItemCartStyle>
      <img src={photo} alt="" />
      <h1>{name}</h1>
      <ContainerQuantity>
        <ItemCartQuantity>
          <span>Quantidade:</span>
          <div>
            <button onClick={removeItem}>-</button>
            <span>{quantity}</span>
            <button onClick={addProduct}>+</button>
          </div>
        </ItemCartQuantity>
        <ItemCartPrice>R${price}</ItemCartPrice>
      </ContainerQuantity>
      <ItemCartButton onClick={removeProductCart} >&#x02A2F;</ItemCartButton>
    </ItemCartStyle>
  )
}