import { TestsitePage } from './app.po';

describe('testsite App', () => {
  let page: TestsitePage;

  beforeEach(() => {
    page = new TestsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
