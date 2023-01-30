import { render, waitFor } from '@testing-library/react';
import { App } from '../../App';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  test('se ao clicar no botão de comprar um Macbook Air 2x ele adiciona ao carrinho e soma R$16400.00', async () => {
    const { getAllByText, getByText } = render(<App />);
    await waitFor(async() => {
      const button = getAllByText('Adicionar ao carrinho');
      userEvent.click(button[1]);
      userEvent.click(button[1]);

      expect(getByText('R$ 16400,00')).toBeInTheDocument();
    })
  });
});