import { render } from '@testing-library/react';
import { App } from '../../App';

describe('Footer', () => {
  test('se o footer tem o texto "MKS sistemas © Todos os direitos reservados"', () => {
    const { getByText } = render(<App />);
    const text = getByText('MKS sistemas © Todos os direitos reservados');
    
    expect(text).toBeInTheDocument();
  });
});