import { EventproPage } from './app.po';

describe('eventpro App', () => {
  let page: EventproPage;

  beforeEach(() => {
    page = new EventproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
