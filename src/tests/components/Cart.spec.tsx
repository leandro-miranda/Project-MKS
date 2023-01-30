import { render } from '@testing-library/react';
import { App } from '../../App';

describe('Cart', () => {
  test('se o Cart tem um botão com o atributo "finalizar compra"', async () => {
    const { getByText } = render(<App />);
    const button = await getByText('finalizar compra');
    
    expect(button).toBeInTheDocument();
  });
});