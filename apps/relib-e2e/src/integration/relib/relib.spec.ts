describe('relib: Relib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=relib--primary&args=name;age;happy:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Relib!');
    });
});
