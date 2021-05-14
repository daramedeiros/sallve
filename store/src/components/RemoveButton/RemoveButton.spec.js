import { render } from '@testing-library/react';

import Header from './index';

describe('Add Button Component', () => {
  describe('basic functionality', () => {
    it('should render with default styles', async () => {
      const { container } = render(<Header />);

      expect(container).toMatchSnapshot();
    });
  });
});