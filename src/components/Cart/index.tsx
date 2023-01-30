import React from 'react';
import { ItemCart } from '../ItemCart';
import { CartContainer, Container, Header, List, TotalPrice, Finished } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeCart } from '../../store/Stock.store';


export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleCloseCart = () => dispatch(closeCart());

  const getTotalPrice = () => {
    if (cart.productsSelected.length > 0) {
      const total = cart.productsSelected
        .map(product => Number(product.price) * Number(product.quantity));
      const soma = total.reduce((acc: number, curl: number) => acc + curl);

      return soma.toFixed(2);
    }

    return '0.00';
  }

  return (
    <div style={{ display: cart.cartOpen }}>
      <CartContainer>
        <Container>
          <Header>
            <h1>Carrinho de compras</h1>
            <button onClick={() => handleCloseCart()}>
              &#x02A2F;
            </button>
          </Header>
          <List className='paddingLast'>
            {cart.productsSelected.map(({ id, name, photo, quantity, price }, index) => (
              <ItemCart
                key={index}
                id={id}
                name={name}
                photo={photo}
                quantity={quantity}
                price={price}
              />
            ))}
          </List>
        </Container>
      </CartContainer>
      <TotalPrice>
        <h1>Total: R$ {getTotalPrice()}</h1>
      </TotalPrice>
      <Finished>
        <h1>Finalizar compra</h1>
      </Finished>
    </div>
  )
}
