import { MandirPage } from './app.po';

describe('mandir App', () => {
  let page: MandirPage;

  beforeEach(() => {
    page = new MandirPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
