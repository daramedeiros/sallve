import { render } from '@testing-library/react';

import EmptyCart from './index';

describe('Add Button Component', () => {
  describe('basic functionality', () => {
    it('should render with default styles', async () => {
      const { container } = render(<EmptyCart />);

      expect(container).toMatchSnapshot();
    });
  });
});