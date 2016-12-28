import { TableuPage } from './app.po';

describe('tableu App', function() {
  let page: TableuPage;

  beforeEach(() => {
    page = new TableuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
