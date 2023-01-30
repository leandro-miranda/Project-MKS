import { render, waitFor } from '@testing-library/react';
import { App } from '../../App';
import '@testing-library/jest-dom';

describe('Card', () => {
  test('se o Card tem uma imagem com o atributo "imagem de um produto"', async () => {
    const { getByAltText } = render(<App />);
    const image = await waitFor(() => getByAltText('imagem de um produto'));

    expect(image).toBeInTheDocument();
  });

  test('se o Card tem um botão com o atributo "adicionar ao carrinho"', async () => {
    const { getByText } = render(<App />);
    const button = await waitFor(() => getByText('adicionar ao carrinho'));

    expect(button).toBeInTheDocument();
  });

  test('se o Card tem um botão com o atributo "adicionar ao carrinho" e ao clicar no botão, o texto do botão é alterado para "adicionado ao carrinho"', async () => {
    const { getByText } = render(<App />);
    const button = await waitFor(() => getByText('adicionar ao carrinho'));
    button.click();

    expect(button).toHaveTextContent('adicionado ao carrinho');
  });

  test('se o Card tem o texto "R$ 10,00"', async () => {
    const { getByText } = render(<App />);
    const text = await waitFor(() => getByText('R$ 10,00'));

    expect(text).toBeInTheDocument();
  });

  test('se o Card tem o nome "Produto 1"', async () => {
    const { getByText } = render(<App />);
    const text = await waitFor(() => getByText('Produto 1'));
    
    expect(text).toBeInTheDocument();
  });
});