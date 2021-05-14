import { render } from '@testing-library/react';

import DeleteButton from './index';

describe('Add Button Component', () => {
  describe('basic functionality', () => {
    it('should render with default styles', async () => {
      const { container } = render(<DeleteButton />);

      expect(container).toMatchSnapshot();
    });
  });
});