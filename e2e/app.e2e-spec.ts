import { Meetup7Page } from './app.po';

describe('meetup7 App', function() {
  let page: Meetup7Page;

  beforeEach(() => {
    page = new Meetup7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
