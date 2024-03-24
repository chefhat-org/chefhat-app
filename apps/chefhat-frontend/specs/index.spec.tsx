import { render, screen } from '@testing-library/react';

import Page from '../src/app/page';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

describe('Page', () => {
  it('should render successfully', async () => {
    const awaitPage = await Page();

    const { baseElement } = render(awaitPage);

    expect(baseElement).toBeTruthy();
    expect(screen.getByText('Chefhat')).toBeTruthy();
  });
});
