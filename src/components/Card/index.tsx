import React from 'react'
import { CardContainer, CardText, CardImage, CardButton } from './style';
import Shopping from '../../assets/images/shopping.png';
import { ICard } from '../../interfaces/ICard';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addMoreProduct } from '../../store/Stock.store';
import { RootState } from '../../store';
import { IProduct } from '../../interfaces/IProduct';
import { toast } from 'react-toastify';

export function Card({ id, photo, price, name, description }: ICard) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleOnClick = () => {
    toast.success('Produto adicionado ao carrinho', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    const productsAll: IProduct[] = cart.products;
    const productsAllSelected: IProduct[] = cart.productsSelected;
    const productFilter = productsAll.find((product) => product.id === id);

    if (!productFilter) {
      return [];
    }

    const productFinish = { ...productFilter, quantity: 1 };

    const verificProduct = productsAllSelected.find((product) => product.id === productFilter.id);

    if (!verificProduct) {
      return dispatch(addProduct(productFinish));
    }

    const addProductExtra = productsAllSelected.map((product) => {
      if (product.id === verificProduct.id) {
        const increment = { ...verificProduct, quantity: Number(verificProduct.quantity) + 1 };

        return increment
      }

      return product;
    });

    return dispatch(addMoreProduct(addProductExtra));
  }
  return (
    <div>
      <CardContainer>
        <CardImage>
          <img src={photo} alt="imagem de um produto" />
        </CardImage>
        <CardText>
          <div>
            <h1>{name}</h1>
            <span>R${price}</span>
          </div>
          <p>{description}</p>
        </CardText>
      </CardContainer>
      <CardButton
        onClick={handleOnClick}
      >
        <img src={Shopping} alt="imagem de um carrinho de compras" />
        <span>Adicionar ao carrinho</span>
      </CardButton>
    </div>
  )
}
