import { render } from '@testing-library/react';

import AddButton from './index';

describe('Add Button Component', () => {
  describe('basic functionality', () => {
    it('should render with default styles', async () => {
      const { container } = render(<AddButton />);

      expect(container).toMatchSnapshot();
    });
  });
});