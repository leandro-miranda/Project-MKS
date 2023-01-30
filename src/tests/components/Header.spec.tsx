import { render } from '@testing-library/react'
import { App } from '../../App';

describe('Header', () => {
  test('se o header tem o texto "MKS sistemas"', () => {
    const { getByText } = render(<App />);
    const text = getByText('MKS sistemas');
    
    expect(text).toBeInTheDocument();
  });

  test('se o header tem um botão com o atributo "carrinho de compras"', async () => {
    const { getByText } = render(<App />);
    const button = await getByText('carrinho de compras');

    expect(button).toBeInTheDocument();
  });
});