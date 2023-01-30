import React, { useEffect } from 'react';
import { Card } from '../Card';
import { Container } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getProductsAsync } from '../../store/Stock.store';

export function List() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAsync());

    getProducts();
  }, []);

  return (
    <Container>
      {cart.products.map(({ id, name, photo, price, description }, index) => (
        <Card
          key={index}
          id={id}
          name={name}
          photo={photo}
          price={price}
          description={description}
        />
      ))}
    </Container>
  );
};