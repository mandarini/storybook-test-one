describe('reapp: One component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=one--primary&args=name;age;happy:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to One!');
    });
});
