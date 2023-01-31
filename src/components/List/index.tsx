import React, { useEffect } from 'react';
import { Card } from '../Card';
import { Container, SkeletonContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getProductsAsync } from '../../store/Stock.store';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function List() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAsync());

    getProducts();
  }, []);

  return (
    <Container>
      {cart.products.length === 0 ? (
        <SkeletonContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton
              key={item}
              width={218}
              height={286}
              borderRadius='0 0 8px 8px'
            />
          ))}
        </SkeletonContainer>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};