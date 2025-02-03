/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from '@open-wc/testing';
import '@ucalgary-design-system/input';

describe('Input', () => {
  it('renders properly', async () => {
    const el = await fixture(html`<ucds-input></ucds-input>`);
    expect(el).shadowDom.to.equal('<input type="text" class="form-text" id="text" name="text">');
  });
});
