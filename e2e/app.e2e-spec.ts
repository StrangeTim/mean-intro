import { PaccPage } from './app.po';

describe('pacc App', function() {
  let page: PaccPage;

  beforeEach(() => {
    page = new PaccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
