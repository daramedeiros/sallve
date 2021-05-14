import { render } from '@testing-library/react';

import BuyButton from './index';

describe('Add Button Component', () => {
  describe('basic functionality', () => {
    it('should render with default styles', async () => {
      const { container } = render(<BuyButton />);

      expect(container).toMatchSnapshot();
    });
  });
});