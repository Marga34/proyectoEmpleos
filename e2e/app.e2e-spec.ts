import { ProyectoEmpleosPage } from './app.po';

describe('proyecto-empleos App', () => {
  let page: ProyectoEmpleosPage;

  beforeEach(() => {
    page = new ProyectoEmpleosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
