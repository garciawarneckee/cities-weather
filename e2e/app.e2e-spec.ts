import { CitiesWeatherPage } from './app.po';

describe('cities-weather App', () => {
  let page: CitiesWeatherPage;

  beforeEach(() => {
    page = new CitiesWeatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
