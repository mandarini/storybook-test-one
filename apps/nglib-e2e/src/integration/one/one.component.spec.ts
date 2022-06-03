describe('nglib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=onecomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('reastor-one').should('exist');
  });
});