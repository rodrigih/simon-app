import { SimonAppPage } from './app.po';

describe('simon-app App', () => {
  let page: SimonAppPage;

  beforeEach(() => {
    page = new SimonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
