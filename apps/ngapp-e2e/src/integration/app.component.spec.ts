describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('reastor-root').should('exist');
  });
});