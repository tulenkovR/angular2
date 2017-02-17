import { AgOnePage } from './app.po';

describe('ag-one App', () => {
  let page: AgOnePage;

  beforeEach(() => {
    page = new AgOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
