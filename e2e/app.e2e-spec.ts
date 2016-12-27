import { CahTvPage } from './app.po';

describe('cah-tv App', function() {
  let page: CahTvPage;

  beforeEach(() => {
    page = new CahTvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
