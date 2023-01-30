import { Container, Home, Button } from './style';
import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/images/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../../store/Stock.store';
import { RootState } from '../../store';

export function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const cartOpen = () => dispatch(openCart());

  return (
    <Home>
      <Container>
        <div className='containerImg'>
          <img src={Logo} alt='Logo MKS' />
        </div>
        <Button
          style={{ display: cart.cartOpen === 'flex' ? 'none' : 'flex' }}
          onClick={() => cartOpen()}
        >
          <img src={Cart} alt='Carrinho de compras' />
          <span>{cart.productsSelected.length}</span>
        </Button>
      </Container>
    </Home>
  )
}