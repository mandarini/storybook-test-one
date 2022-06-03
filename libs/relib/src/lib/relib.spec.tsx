import { render } from '@testing-library/react';

import Relib from './relib';

describe('Relib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Relib />);
    expect(baseElement).toBeTruthy();
  });
});
